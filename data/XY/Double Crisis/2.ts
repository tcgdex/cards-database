import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Camerupt",
		fr: "Camérupt de la Team Magma",
		pt: "Camerupt da Equipe Magma",
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
		en: "Team Magma's Numel",
		fr: "Chamallot de la Team Magma",
		pt: "Numel da Equipe Magma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Draft",
				fr: "Souffle Enflammé",
				pt: "Brisa Ardente",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fighting or Fire Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fighting ou Fire de votre pile de défausse à ce Pokémon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia de Luta ou Fogo da sua pilha de descarte a este Pokémon",
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
				en: "Flame Ball",
				fr: "Boule de Feu",
				pt: "Bola de Chamas",
			},
			effect: {
				en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
				pt: "Mova uma Energia básica deste Pokémon para 1 dos seus Pokémon do Banco.",
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

	thirdParty: {
		cardmarket: 282513,
		tcgplayer: 97048
	}
}

export default card
