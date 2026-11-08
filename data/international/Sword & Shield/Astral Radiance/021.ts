import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [77],
	set: Set,

	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flame Tail",
			'fr-fr': "Queue de Flammes",
			'es-es': "Cola de Fuego",
			'it-it': "Codafiamma",
			'pt-br': "Cauda de Chamas",
			'de-de': "Flammenschweif"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "These Pokémon live in herds out in the grassland. Newborn foals lack their fiery manes, which will develop about an hour after birth.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658519,
				tcgplayer: 272221
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658519,
				tcgplayer: 272221
			}
		},
	],
}

export default card
