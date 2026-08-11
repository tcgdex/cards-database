import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'de-de': "Zirpeise"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sore Performance",
				'fr-fr': "Spectacle douloureux",
				'de-de': "Lahmer Auftritt"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Concerto",
				'fr-fr': "Concerto",
				'de-de': "Konzert"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Kricketot and each Kricketune you have in play.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Crikzik et chaque Mélokrik que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Zirpeise und Zirpurze, das du im Spiel hast, zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It crosses its knifelike arms in front of its chest when it cries. It can compose melodies ad lib.",
		'fr-fr': "Il croise ses bras affûtés devant son torse pour crier. Il compose tout un tas de mélodies."
	},

	thirdParty: {
		cardmarket: 277656,
		tcgplayer: 86532
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
