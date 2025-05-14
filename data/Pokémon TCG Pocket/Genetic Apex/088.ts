import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		de: "Amphizel",
		'pt-br': "Frogadier",
		ko: "개굴반장"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Froakie"
	},


	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
		fr: "Il est capable de lancer des pierres recouvertes\nde mousse avec une précision suffisante pour\ntoucher une canette vide à 30 m."
	}
}

export default card
