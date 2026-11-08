import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dual Brains",
				'fr-fr': "Double Cerveau",
				'es-es': "Doble Cerebro",
				'it-it': "Doppiamente",
				'pt-br': "Cérebros Duplos",
				'de-de': "Doppelhirn"
			},
			effect: {
				'en-us': "During your turn, you may play 2 Supporter cards.",
				'fr-fr': "Pendant votre tour, vous pouvez jouer 2 cartes Supporter.",
				'es-es': "Durante tu turno, puedes jugar 2 cartas de Partidario.",
				'it-it': "Durante il tuo turno, puoi giocare due carte Aiuto.",
				'pt-br': "Durante sua vez de jogar, você poderá jogar 2 cards de Apoiador.",
				'de-de': "Während deines Zuges kannst du 2 Unterstützerkarten spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gyro Ball",
				'fr-fr': "Gyroballe",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
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

	retreat: 3,

	description: {
		'en-us': "Sometimes the magnetism emitted by Magnezone is too strong, making them attract each other so they cannot move.",
	},

	thirdParty: {
		cardmarket: 280786,
		tcgplayer: 87120
	}
}

export default card
