import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'de-de': "Despotar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [248],

	hp: 140,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Crush",
				'fr-fr': "Destruqueue",
				'de-de': "Zerquetschender Schweif"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Extremely strong, it can change the landscape. It has an insolent nature that makes it not care about others."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90121,
				cardmarket: 279182
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90121,
				cardmarket: 279182
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 125049
			}
		}
	],

}

export default card
