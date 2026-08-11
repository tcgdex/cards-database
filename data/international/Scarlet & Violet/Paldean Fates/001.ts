import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'es-es': "Pineco",
		'it-it': "Pineco",
		'pt-br': "Pineco",
		'de-de': "Tannza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751527,
				tcgplayer: 534132,
				cardtrader: 274134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751527,
				tcgplayer: 534132,
				cardtrader: 274134
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
	},

}

export default card
