import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		pt: "Escavalier",
		de: "Cavalanzas"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Joust",
				fr: "Joute"
			},
			effect: {
				en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Cavalry Lance",
				fr: "Lance de Chevalier"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse."
			},
			damage: 70,

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

	retreat: 3,

	thirdParty: {
		cardmarket: 280402,
		tcgplayer: 85314
	}
}

export default card
