import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'de-de': "Sandan",
		'it-it': "Sandshrew",
		'es-es': "Sandshrew",
		'pt-br': "Sandshrew",
		'es-mx': "Sandshrew"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [27],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'de-de': "Schaufelkrallen",
			'it-it': "Scavazanne",
			'es-es': "Hundir Garras",
			'pt-br': "Fincar Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'de-de': "Lehmschelle",
			'it-it': "Fangosberla",
			'es-es': "Bofetón Lodo",
			'pt-br': "Tapa de Lama",
			'es-mx': "Bofetón Lodo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851139,
				tcgplayer: 654407
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851139,
				tcgplayer: 654407
			}
		},
	],
}

export default card
