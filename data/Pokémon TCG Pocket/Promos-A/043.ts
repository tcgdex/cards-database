import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		es: "Cherrim",
		it: "Cherrim",
		de: "Kinoso",
		'pt-br': "Cherrim",
		ko: "체리꼬"
	},

	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes this form. It's full of energy while it's like this, and its liveliness will go on until sundown.",
		fr: "Il prend cette forme lorsqu'il a fait le plein de soleil.\nIl déborde alors d'énergie et reste très actif jusqu'au crépuscule.",
		es: "Adopta esta forma cuando lo bañan los rayos del sol. Siempre\nestá rebosante de energía y se mantiene activo hasta el ocaso.",
		it: "Assume questa forma dopo essersi esposto\nalla luce solare e aver fatto il pieno di energia.\nResta vivace fino al crepuscolo.",
		de: "Diese Form nimmt Kinoso an, wenn es viel Sonne\ngetankt und dadurch seine Energie aufgefüllt hat.\nEs bleibt bis zum Sonnenuntergang aktiv.",
		'pt-br': "Após absorver uma grande quantidade de luz solar,\nCherrim assume esta forma. Enquanto estiver assim, fica\ncheio de energia, e seu vigor permanece até o cair do sol.",
		ko: "태양의 빛을 받아\n기운이 넘치는 모습.\n해가 지기 전까지는 활발하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
			es: "Drenadoras",
			it: "Parassiseme",
			de: "Egelsamen",
			'pt-br': "Semente Sanguessuga",
			ko: "씨뿌리기"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 20회복."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol5"]
}

export default card
