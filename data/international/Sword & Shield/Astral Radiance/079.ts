import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [449],
	set: Set,

	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658686,
				tcgplayer: 272280
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658686,
				tcgplayer: 272280
			}
		},
	],
}

export default card
