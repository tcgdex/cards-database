import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sealeo",
		'fr-fr': "Phogleur de la Team Aqua",
		'pt-br': "Sealeo da Equipe Aqua",
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Team Aqua's Spheal",
		'fr-fr': "Obalie de la Team Aqua",
		'pt-br': "Spheal da Equipe Aqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Splatter",
				'fr-fr': "Crépitement",
				'pt-br': "Respingo",
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'pt-br': "Este ataque causa 20 de danos a 1 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hail Storm",
				'fr-fr': "Déluge de Grêle",
				'pt-br': "Tormenta de Granizo",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Team Magma Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Magma, cette attaque inflige 60 dégâts supplémentaires.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon da Equipe Magma, esse ataque causará 60 de danos adicionais.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It provides support by making paths of ice. It can win any battle as long as it's on ice.",
	},

	thirdParty: {
		cardmarket: 282515,
		tcgplayer: 97050
	}
}

export default card
