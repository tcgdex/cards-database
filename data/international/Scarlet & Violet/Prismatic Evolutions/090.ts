import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'pt-br': "Noibat",
		'it-it': "Noibat",
		'de-de': "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'pt-br': "Asa",
			'it-it': "Alabattito",
			'de-de': "Flattern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Masako Tomii",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805482,
				tcgplayer: 610445
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805482,
				tcgplayer: 610445
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806540,
				tcgplayer: 610603
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806541,
				tcgplayer: 610704
			}
		},
	],
}

export default card
