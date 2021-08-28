import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "miki kudo",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d’Onda",
			pt: "Wave Splash",
			de: "Wellenplatscher"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card