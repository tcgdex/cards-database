import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Necrozma-GX",
		fr: "Necrozma-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 180,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Light's End",
				fr: "Extinction des Feux",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Colorless Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Colorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prismatic Burst",
				fr: "Explosion Prismatique",
			},
			effect: {
				en: "Discard all Psychic Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Psychic de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Ray-GX",
				fr: "Rayon Noir-GX",
			},
			effect: {
				en: "This attack does 100 damage to each of your opponent's Pokémon-GX and Pokémon-EX. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon-GX et Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
