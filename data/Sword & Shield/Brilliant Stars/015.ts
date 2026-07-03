import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [588],
	set: Set,

	name: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608452,
				tcgplayer: 263703
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608452,
				tcgplayer: 263703
			}
		},
	],
}

export default card
