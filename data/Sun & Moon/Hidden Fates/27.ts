import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Last Pattern",
				fr: "Dernier Motif",
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an opponent’s attack, discard 2 random cards from your opponent’s hand.",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, défaussez 2 cartes au hasard de la main de votre adversaire.",
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
				en: "Rocket Tail",
				fr: "Queue Rocket",
			},
			effect: {
				en: "If Jessie & James is in your discard pile, this attack does 80 more damage.",
				fr: "Si la carte Jessie et James est dans votre pile de défausse, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 381231,
		tcgplayer: 197671
	}
}

export default card
