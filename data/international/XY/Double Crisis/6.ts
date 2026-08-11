import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Kyogre EX",
		'fr-fr': "Kyogre-EX de la Team Aqua",
		'pt-br': "Kyogre-EX da Equipe Aqua",
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 190,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Saver",
				'fr-fr': "Économie de Puissance",
				'pt-br': "Economizador de Energia",
			},
			effect: {
				'en-us': "If there are 4 or fewer Team Aqua Pokémon in play, this Pokémon can't attack.",
				'fr-fr': "S'il y a 4 Pokémon de la Team Aqua en jeu ou moins, ce Pokémon ne peut pas attaquer.",
				'pt-br': "Se houver 4 ou menos Pokémon da Equipe Aqua em jogo, esse Pokémon não poderá atacar",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Impact",
				'fr-fr': "Impact Aqua",
				'pt-br': "Impacto Aqua",
			},
			effect: {
				'en-us': "This attack does 20 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada {C} no Custo para Recuar do Pokémon Ativo do seu oponente."
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 282517,
		tcgplayer: 97052
	}
}

export default card
