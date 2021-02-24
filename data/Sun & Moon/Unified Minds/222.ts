import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mewtwo & Mew-GX",
		fr: "Mewtwo et Mew-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 270,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Perfection",
				fr: "Perfection",
			},
			effect: {
				en: "This Pokémon can use the attacks of any Pokémon-GX or Pokémon-EX on your Bench or in your discard pile. (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon-GX ou Pokémon-EX sur votre Banc ou dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Miraculous Duo-GX",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Duo Miraculeux-GX",
			},
			effect: {
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

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
