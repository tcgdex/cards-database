import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'de-de': "Reptain"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tail Shake",
				'fr-fr': "Secoue-queue",
				'de-de': "Schweifwedeln"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in dense jungles. While closing in on its prey, it leaps from branch to branch.",
		'fr-fr': "Il vit dans les jungles denses. Il saute de branche en branche pour approcher de sa proie."
	},

	thirdParty: {
		cardmarket: 278337,
		tcgplayer: 85942
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
