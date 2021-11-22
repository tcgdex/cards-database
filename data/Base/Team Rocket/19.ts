import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Arbok",
		fr: "Arbok obscur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ekans",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Stare",
				fr: "Regard"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokémon has a Pokémon Power, that power stops working until the end of your opponent's next turn.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.) Si ce Pokémon possède un Pouvoir Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin du prochain tour de votre adversaire."
			}

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Vapor",
				fr: "Brume poisoneuse"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il paralyse ses proies d'un regard. Si vous en rencontrez un, gardez-vous de le regarder dans les yeux ."
	},

	variants: {
		wPromo: true
	}
}

export default card
