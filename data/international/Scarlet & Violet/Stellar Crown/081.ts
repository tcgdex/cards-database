import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785935,
				tcgplayer: 567307
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785935,
				tcgplayer: 567307
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card
