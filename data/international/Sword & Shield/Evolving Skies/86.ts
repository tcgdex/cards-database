import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'es-es': "Roggenrola",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'de-de': "Kiesling"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Tomokazu Komiya",

	attacks: [{
		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Mud-Slap",
			'de-de': "Lehmschelle"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Rolling Tackle",
			'de-de': "Rolltackle"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "When it detects a noise, it starts to move. The energy core inside it makes this Pokémon slightly warm to the touch."
	},

	dexId: [524],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574134,
				tcgplayer: 246883
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574134,
				tcgplayer: 246883
			}
		},
	],
}

export default card
