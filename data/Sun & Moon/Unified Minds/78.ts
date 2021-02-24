import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Latios-GX",
		fr: "Latios-GX",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Bind",
				fr: "Puissance Restreinte",
			},
			effect: {
				en: "If you have 4 or fewer Pokémon in play, this Pokémon can't attack.",
				fr: "Si vous avez 4 Pokémon ou moins en jeu, ce Pokémon ne peut pas attaquer.",
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
				en: "Tag Purge",
				fr: "Escouade-Éclat",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon ESCOUADE.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Clear Vision-GX",
				fr: "Acuité-GX",
			},
			effect: {
				en: "For the rest of this game, your opponent can't use any GX attacks. (You can't use more than 1 GX attack in a game.)",
				fr: "Pour le reste de cette partie, votre adversaire ne peut pas utiliser d’attaque GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
