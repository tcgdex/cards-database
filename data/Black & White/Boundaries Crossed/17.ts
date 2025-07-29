import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
			},
			damage: 50,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280604
	}
}

export default card
