import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Muk",
		'fr-fr': "Grotadmorv de la Team Aqua",
		'pt-br': "Muk da Equipe Aqua",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Team Aqua's Grimer",
		'fr-fr': "Tadmorv de la Team Aqua",
		'pt-br': "Grimer da Equipe Aqua",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sludge Festival",
				'fr-fr': "Festival de Boue",
				'pt-br': "Festival de Lodo"
			},
			effect: {
				'en-us': "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is {C} more.",
				'fr-fr': "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de {C}.",
				'pt-br': "O Custo para Recuar de cada um dos Pokémon em jogo (exceto os Pokémon da Equipe Aqua) será de {C} a mais.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pester",
				'fr-fr': "Tarabustage",
				'pt-br': "Importunar",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 60 de danos adicionais.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It immobilizes its opponents by wrapping them in its huge, poisonous body. It'll smoosh you, too!",
	},

	thirdParty: {
		cardmarket: 282519,
		tcgplayer: 97054
	}
}

export default card
