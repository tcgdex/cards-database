import Type from "./Type";
import Category from "./Category";
import Tag from "./Tag";
import LangList from "./LangList";
import AbilityType from "./AbilityType";
import Rarity from "./Rarity";
import Attack from "./Attack";
import { Page } from "puppeteer-core";
import Illustrator from "./Illutrator";
import { promises } from "fs";
import Ability from "./Ability";

let abilities: Array<string> = []

interface Card {

	// global id made of setid and localId
	id: string

	// set id
	localId: string|number

	dexId?: number

	// Card informations (from top to bottom of card)
	name: LangList<string>
	hp?: number //optionnal because energy/trainer cards might have not any hp
	type?: Array<Type> // ex for multiple https://api.pokemon.com/us/pokemon-tcg/pokemon-cards/ex-series/ex13/17/

	image?: {
		low: LangList<string>,
		high?: LangList<string>
	}

	evolveFrom?: LangList<string>
	evolveTo?: Array<LangList<string>>
	tags: Array<Tag> // made after
	illustrator?: Illustrator

	abilities?: Array<Ability>

	attacks?: Array<Attack>

	weaknesses?: Array<{
		type: Type
		value?: string
	}>

	resistances?: Array<{
		type: Type
		value?: string
	}>

	retreat?: number

	rarity: Rarity

	// Other elements
	category: Category
	set: {
		name: string
		code: string
	}
}

namespace Card {
	export async function generate(tab: Page, existingCard: Card, lang: string, set: {name:string, code: string}): Promise<Card> {
		const card: Card = Object.assign(n(), existingCard)
		card.set = set
		// LocalID
		card.localId = await getId(tab)
		card.id = `${card.set.code}-${card.localId}`

		// first line
		card.name = LangList.insert(card.name, await getName(tab), lang)
		try {
			card.hp = await getHP(tab)
		} catch {}
		try {
			card.type = await getType(tab)
		} catch {}

		card.image.low = LangList.insert(card.image.low, await getImage(tab), lang)

		try {
			const from = await getEvolveFrom(tab)
			card.evolveFrom = LangList.insert(card.evolveFrom || {}, from, lang)
		} catch {}
		card.tags = await Tag.get(tab)
		try {
			card.illustrator = await Illustrator.getIllustrator(tab)
		} catch {}

		try {
			const ability = await getAbility(tab, lang)
			if (!card.abilities) card.abilities = []
			if (!card.abilities[0]) card.abilities[0] = {id: -1, type: -1, name: {}, text: {}}

			if (ability.id) card.abilities[0].id = ability.id
			try {
				card.abilities[0].type = AbilityType.getFromText(ability.type)
			} catch (e) {
				console.log(`Error ${tab.url()}`)
				console.log(e)
			}
			card.abilities[0].name = LangList.insert(card.abilities[0].name, ability.name, lang)
			card.abilities[0].text = LangList.insert(card.abilities[0].text, ability.text, lang)
		} catch (e) {}

		try {
			card.attacks = await Attack.getAttacks(tab, lang, card.attacks)
		} catch (e){
			console.log(e)
		}

		try {
			card.weaknesses = await getWeaknessOrResistance(tab, 1)
		} catch {}
		try {
			card.resistances = await getWeaknessOrResistance(tab, 2)
		} catch {}

		// Category
		card.category = await Category.detect(tab)


		try {
			card.retreat = await getRetreat(tab)
		} catch {
			if (card.category === Category.POKEMON) {
				card.retreat = 0
			}
		}

		card.rarity = await Rarity.getRarity(tab)

		return card
	}

	export function n() {
		return {
			name: {},
			evolveFrom: {},
			tags: [],
			image: {}
		}
	}

	export async function fetchAbilities() {
		abilities = JSON.parse((await promises.readFile("./generated/abilities.json")).toString())
	}
	export function processAbility(str: string): number {
		if (!abilities.includes(str)) {
			abilities.push(str)
		}

		return abilities.indexOf(str)
	}

	export async function saveAbilities() {
		await promises.writeFile("./generated/abilities.json", JSON.stringify(abilities))
	}

	function getEvolveFrom(tab: Page): Promise<string> {
		return tab.$eval(".card-type h4 a", (el: HTMLElement) => {
			return el.innerText
		})
	}


	function getImage(tab: Page): Promise<string> {
		return tab.$eval(".card-image img", (el: HTMLImageElement) => {
			return el.src
		})
	}

	async function getType(tab: Page): Promise<Array<Type>> {
		try {
			const types = await tab.$$eval(".card-basic-info .right a i", (els: Array<HTMLElement>) => {
				const l = []
				for (const el of els) {
					el.classList.remove("energy")
					l.push(
						el.classList.item(0)
					)
				}
				return l
			})
			const res = []
			for (const t of types) {
				res.push(
					Type.getFromClass(t)
				)
			}
			return res
		} catch {
			return []
		}
	}

	export function getId(tab: Page): Promise<string|number> {
		try {
			return tab.$eval(".stats-footer span", (el: HTMLElement) => {
				const g = /[\/ ]/g
				const arr = el.innerText.split(g)
				const r = /^[0-9]+$/
				return r.test(arr[0]) ? parseInt(arr[0]) : arr[0]
			})
		} catch (e) {
			console.log(tab.url())
			console.log(e)
			process.exit(1)
		}
	}

	function getHP(tab: Page): Promise<number> {
		return tab.$eval(".card-basic-info .card-hp", (el: HTMLElement) => {
			const r = /[^0-9]/g
			return parseInt(el.innerText.replace(r, ""))
		})
	}

	function getName(tab: Page): Promise<string> {
		return tab.$eval("h1", (el: HTMLElement) => {
			return el.innerText
		})
	}

	async function getAbility(tab: Page, lang: string): Promise<{id?: number, type: string, name: string, text: string}> {
		const {type, name} = await tab.$eval(".pokemon-abilities h3", (el: HTMLElement) => {
			return {
				type: (el.querySelector("div[class]") as HTMLElement)?.innerText,
				name: (el.querySelector("div:not([class])") as HTMLElement)?.innerText
			}
		})
		const text = await tab.$eval(".pokemon-abilities h3 ~ p", (el: HTMLElement) => {
			return el.innerText
		})

		let id = undefined

		if (lang === "en") {
			if (!abilities.includes(name)) {
				abilities.push(name)
			}
			id = abilities.indexOf(name)
		}

		return {
			id,
			type,
			name,
			text
		}
	}

	async function getWeaknessOrResistance(tab: Page, childNth: number): Promise<Array<{type: Type, value: string}>> {
		const t = await tab.$eval(`.pokemon-stats .stat:nth-child(${childNth})`, (el: HTMLElement) => {
			if (el.childElementCount === 1) return
			const energy = el.querySelector("ul li a i")
			const txt = (el.querySelector("ul li") as HTMLElement).innerText

			energy.classList.remove("energy")
			return {
				energy: energy.classList.item(0),
				txt
			}
		})
		return [{
			type: Type.getFromClass(t.energy),
			value: t.txt
		}]
	}

	function getRetreat(tab: Page): Promise<number> {
		return tab.$eval(".stat.last .card-energies", (el: HTMLElement) => {
			return el.childElementCount
		})
	}
}

export default Card
