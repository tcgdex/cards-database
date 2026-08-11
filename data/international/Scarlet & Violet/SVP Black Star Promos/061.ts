import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
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
	illustrator: "Nobuhiro Imagawa",
	description: {
		'en-us': "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 729205,
				tcgplayer: 526634
			},
		}
	],
}

export default card
