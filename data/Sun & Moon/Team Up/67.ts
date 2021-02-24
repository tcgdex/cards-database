import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mr. Mime-GX",
		fr: "M. Mime-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 150,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magic Odds",
				fr: "Impair Magique",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by your opponent's attacks if that damage is exactly 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, or 250.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire si le montant des dégâts est égal à 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Breakdown",
				fr: "Réaction",
			},
			effect: {
				en: "For each card in your opponent's hand, put 1 damage counter on their Active Pokémon.",
				fr: "Pour chaque carte dans la main de votre adversaire, placez un marqueur de dégâts sur son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Life Trick-GX",
				fr: "Astuce Vitale-GX",
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],


	retreat: 2,



}

export default card
