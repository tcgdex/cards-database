import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
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
				'en-us': "Deafen",
				'fr-fr': "Rendre Sourd",
			},
			effect: {
				'en-us': "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healwing",
				'fr-fr': "Aile Soin",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
	},

	thirdParty: {
		cardmarket: 280961,
		tcgplayer: 84916
	}
}

export default card
