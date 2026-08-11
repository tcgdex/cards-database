import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Camerupt",
		'fr-fr': "Camérupt de la Team Magma",
		'pt-br': "Camerupt da Equipe Magma",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Team Magma's Numel",
		'fr-fr': "Chamallot de la Team Magma",
		'pt-br': "Numel da Equipe Magma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Burning Draft",
				'fr-fr': "Souffle Enflammé",
				'pt-br': "Brisa Ardente",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a {F} or {R} Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie {F} ou {R} de votre pile de défausse à ce Pokémon.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia {F} ou {R} da sua pilha de descarte a este Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Ball",
				'fr-fr': "Boule de Feu",
				'pt-br': "Bola de Chamas",
			},
			effect: {
				'en-us': "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
				'pt-br': "Mova uma Energia básica deste Pokémon para 1 dos seus Pokémon do Banco.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Camerupt, with its strength against fire, played a big role in rescuing team members.",
	},

	thirdParty: {
		cardmarket: 282513,
		tcgplayer: 97048
	}
}

export default card
