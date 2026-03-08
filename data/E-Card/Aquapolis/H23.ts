import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earth Rift",
				fr: "Faille terreste",
				de: "Erdspalt"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can't be used during your next turn.",
				fr: "Cette attaque inflige 10 dégâts à tous les Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.) Lancez ensuite une pièce. Si c'est pile, cette attaque ne peut pas être utilisée à nouveau durant votre prochain tour.",
				de: "Dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wirf dann eine Münze. Bei \"Zahl\" kann dieser Angriff in deinem nächsten Zug nicht verwendet werden."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Smash",
				fr: "Éclate-fer",
				de: "Eisenschmetterer"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 faces, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires. Si vous obtenez 2 piles, cette attaque ne fait rien. Si l'une est face et l'autre est pile, cette attaque n'inflige que 50 dégâts.",
				de: "Wirf 2 Münzen. Wenn beide Münzen \"Kopf\" zeigen, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Zeigt 1 \"Kopf\" und 1 \"Zahl\", fügt dieser Angriff nur 50 Schadenspunkte zu."
			},
			damage: "50+",

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
			type: "Grass",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275058,
		tcgplayer: 89557
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
