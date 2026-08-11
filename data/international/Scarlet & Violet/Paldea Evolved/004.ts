import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		'fr-fr': "Pomdepik",
		'en-us': "Pineco",
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
			'fr-fr': "Roulade",
			'en-us': "Rollout",
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
				cardmarket: 715476,
				tcgplayer: 497415,
				cardtrader: 248300
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715476,
				tcgplayer: 497415,
				cardtrader: 248300
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
	},
}

export default card
