import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'pt-br': "Bronzor",
		'it-it': "Bronzor",
		'de-de': "Bronzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello",
			'de-de': "Einhämmern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Souichirou Gunjima",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805455,
				tcgplayer: 610421
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805455,
				tcgplayer: 610421
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806500,
				tcgplayer: 610583
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806501,
				tcgplayer: 610684
			}
		},
	],
}

export default card
