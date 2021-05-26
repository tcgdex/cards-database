import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Machamp-GX",
		fr: "Mackogneur-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 250,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe Transversale",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bedrock Breaker",
				fr: "Brise Fondation",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
			},
			damage: 130,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Muscle Punch-GX",
				fr: "Poing Musclé-GX",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
