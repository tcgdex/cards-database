import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dispareptil",
		en: "Drakloak"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Fantyrm",
		en: "Dreepy"
	},

	attacks: [{
		name: {
			fr: "Citation",
			en: "Summon"
		},

		effect: {
			fr: "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Morsure",
			en: "Bite"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card