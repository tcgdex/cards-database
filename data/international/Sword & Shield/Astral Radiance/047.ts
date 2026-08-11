import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [712],
	set: Set,

	name: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'es-es': "Témpano",
			'it-it': "Stalattite",
			'pt-br': "Pingente de Gelo",
			'de-de': "Eiszapfen"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Lives on mountains blanketed in perennial snow. It freezes water vapor in the air to make the ice helmet that it dons for defense.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658588,
				tcgplayer: 272247
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658588,
				tcgplayer: 272247
			}
		},
	],
}

export default card
