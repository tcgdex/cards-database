import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Walrein",
		'fr-fr': "Kaimorse de la Team Aqua",
		'pt-br': "Walrein da Equipe Aqua",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Team Aqua's Sealeo",
		'fr-fr': "Phogleur de la Team Aqua",
		'pt-br': "Sealeo da Equipe Aqua",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Power Blow",
				'fr-fr': "Coup Puissant",
				'pt-br': "Golpe Poderoso",
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
				'pt-br': "Esse ataque causa 30 de danos vezes a quantidade de Energia ligada a este Pokémon",
			},
			damage: "30×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dual Blizzard",
				'fr-fr': "Double Blizzard",
				'pt-br': "Nevasca Dupla",
			},
			effect: {
				'en-us': "Discard 2 {W} Energy attached to this Pokémon. This attack does 80 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies {W} attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'pt-br': "Descarte 2 Energias {W} ligadas a este Pokémon. Este ataque causa 80 de danos a 2 dos Pokémon de seu oponente. (Não aplique Fraqueza ou Resistência a Pokémon no Banco.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It's good at attacks that freeze opponents with a powerful cold snap. Then, it pulverizes a frozen foe with its sharp tusks!",
	},

	thirdParty: {
		cardmarket: 282516,
		tcgplayer: 97051
	}
}

export default card
