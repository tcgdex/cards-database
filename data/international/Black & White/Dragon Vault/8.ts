import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
	},

	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Scornful Storm",
				'fr-fr': "Vent Méprisant",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may have your opponent discard cards from his or her hand until he or she has 4 cards left in his or her hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de défausser des cartes de sa main jusqu'à ce qu'il ne reste que 4 cartes dans sa main.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
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

	retreat: 2,

	description: {
		'en-us': "As a result of its long-held dream of flying, its cellular structure changed, and wings grew out.",
	},

	thirdParty: {
		cardmarket: 281008,
		tcgplayer: 88900
	}
}

export default card
