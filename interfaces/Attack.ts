import LangList from "./LangList";
import Type from "./Type";
import { Page } from "puppeteer-core";

interface Attack {
	cost?: Array<Type>
	name: LangList<string>
	text?: LangList<string>
	damage?: string|number
}

export interface LocalizedAttack {
	cost?: Array<Type|string>
	name: string|LangList<string>
	text?: string|LangList<string>
	damage?: string|number
}

namespace Attack {
	export async function getAttacks(tab: Page, lang: string, existing?: Array<Attack>): Promise<Array<Attack>> {
		try {
			const t = await tab.$$eval('.pokemon-abilities .ability', (els: Array<HTMLElement>) => {
				const attacks: Array<LocalizedAttack> = []
				const r = /^[0-9]+$/
				for (const e of els) {
					if (e.childElementCount < 2) continue
					const cost = []
					e.querySelectorAll("ul.left li i").forEach(el => {
						el.classList.remove("energy")
						cost.push(el.classList.item(0))
					})
					const txt = e.querySelector("pre")?.innerText
					const power = (e.querySelector("span.right") as HTMLElement)?.innerText
					attacks.push({
						cost,
						name: e.querySelector("h4")?.innerText,
						text: txt ? txt : undefined,
						damage: r.test(power) ? parseInt(power) : power
					})
				}
				return attacks
			})
			const atts: Array<Attack> = []
			for (const i in t) {
				if (!t.hasOwnProperty(i)) continue
				const att = t[i];
				let exist = existing && existing[i] || {}

				const cost: Array<Type> = []
				for (const e of att.cost) {
					if (typeof e === "number") {
						cost.push(e)
						continue
					}
					if (e === "icon-free") continue
					try {
						cost.push(
							Type.getFromClass(e)
						)
					} catch (e) {
						console.log(e)
						console.log(tab.url())
						process.exit(1)
					}
				}

				const taa: Attack = {
					name: LangList.insert(exist["name"], att.name, lang)
				}
				if (att.text) taa.text = LangList.insert(exist["text"], att.text, lang)
				if (att.damage) taa.damage = att.damage
				if (att.cost) taa.cost = cost

				atts.push(taa)
			}
			return atts
		} catch (e) {
			console.log(e)
			return []
		}
	}
}

export default Attack
