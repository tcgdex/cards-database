import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'es-es': "Scizor",
		'it-it': "Scizor",
		'pt-br': "Scizor",
		'de-de': "Scherox"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Slash",
				'fr-fr': "Tranche Acier",
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-EX.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-EX.",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
			},
			effect: {
				'en-us': "This Pokémon can't use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It raises its pincers with eyelike markings for intimidation. It also swings them down dangerously.",
	},

	thirdParty: {
		cardmarket: 280681,
		tcgplayer: 88965
	}
}

export default card
