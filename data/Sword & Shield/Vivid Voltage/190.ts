import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Exagide VMAX",
		en: "Aegislash VMAX",
		es: "Aegislash VMAX",
		it: "Aegislash VMAX",
		pt: "Aegislash VMAX",
		de: "Durengard VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	evolveFrom: {
		fr: "Exagide-V",
		en: "Aegislash V",
		es: "Aegislash V",
		it: "Aegislash-V",
		pt: "Aegislash V",
		de: "Durengard-V"
	},

	attacks: [{
		name: {
			fr: "Taillomax",
			en: "Max Hack",
			es: "Maxitajada",
			it: "Dynataglio",
			pt: "Ceifada Max",
			de: "Dyna-Hieb"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			en: "This attack does 30 more damage for each Prize card you have taken.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que hayas cogido.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio che hai preso.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "160+",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	suffix: "V"
}

export default card