import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Golbat",
		'fr-fr': "Nosferalto obscur",
		'de-de': "Dunkles Golbat"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Sneak Attack",
				'fr-fr': "Attaque sournoise",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "When you play Dark Golbat from your hand, you may choose 1 of your opponent's Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.",
				'fr-fr': "Lorsque vous jouez Nosferalto obscur depuis votre main, vous pouvez choisir 1 des Pokémon de votre adversaire. Dans ce cas, Nosferalto obscur inflige 10 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance).",
				'de-de': "Wenn du Dunkles Golbat von deiner Hand spielst, kannst du ein Pokémon deines Gegners wählen. In diesem Fall fügt Dunkles Golbat diesem Pokémon 20 Schadenspunkte zu. (Schwäche und Resistnz anwenden.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Flitter",
				'fr-fr': "Voltige",
				'de-de': "Huschen"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)",
				'de-de': "Wähle ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pok4emon 20 Schadenspunkte zu. Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle Auswirkungennach der Anwendung von Schwäche und Resistenz finden immer noch statt)"
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Sneaks up silently on its prey and attacks it from behind, sometimes killing it with one bite.",
		'fr-fr': "Il se faufile silencieusement derrière ses proies pour les attaquer, les tuant parfois d'une seule morsure."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274060,
				tcgplayer: 84601
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274060,
				tcgplayer: 84601
			}
		}
	]
}

export default card
