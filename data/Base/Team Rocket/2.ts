import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Arbok",
		fr: "Arbok obscur",
		de: "Dunkles Arbok"
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
		fr: "Abo"
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
				fr: "Regard",
				de: "Starren"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokémon has a Pokémon Power, that power stops working until the end of your opponent's next turn.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.) Si ce Pokémon possède un Pouvoir Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin du prochain tour de votre adversaire.",
				de: "Wähle ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.) Falls dieses Pokémon über Pokémon-Power verfügt, funkioniert diese Fähigkeit bis zum Ende des nächsten gegnerischen Zuges nicht mehr."
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
				fr: "Brume poisoneuse",
				de: "Giftige Dämpfe"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Das verteidigende Pokémon ist jetzt vergiftet. Dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
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

	thirdParty: {
		cardmarket: 274055,
		tcgplayer: 84563
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
