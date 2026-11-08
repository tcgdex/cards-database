import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'de-de': "Tritt"
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

	description: {
		'en-us': "It meditates to heighten its inner energy and to float in the air. It eats one berry a day.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760712,
				tcgplayer: 542826
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760712,
				tcgplayer: 542826
			}
		},
	],

	illustrator: "Natsumi Miyanose",

}

export default card