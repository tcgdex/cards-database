import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Kabutops",
		fr: "Kabutops brillant",
		de: "Schimmerndes Kabutops"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Lightning",
			],
			name: {
				en: "Lightning Cut",
				fr: "Coupe éclair",
				de: "Blitzschnitt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires et inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez ni la Faiblesse, ni la Résistance aux Pokémon du Banc.) Si c'est pile, cette attaque inflige 30 dégâts et Kabutops brillant s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu und außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Bei „Zahl“ fügt dieser Angriff 30 Schadenspunkte zu und Schimmerndes Kabutops fügt sich selber 30 Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Water",
				"Water",
			],
			name: {
				en: "Water Slash",
				fr: "Tranche O",
				de: "Wasserschlitzer"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie {W} attachée à Kabutops brillant mais non utilisée pour payer le coût d'Énergie de cette attaque. N'appliquez pas la Résistance.",
				de: "Fügt 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Schimmerndes Kabutops angelegte {W}-Energie, die nicht zum Zahlen der Angriffskosten verwendet wird, zu. Wende Resistenz nicht an."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "This ancient Pokémon uses its razor-sharp claws to cut open its prey and gain access to its blood.",
		fr: "Ce Pokémon antique utilise ses griffes acérées pour trancher ses proies et récupérer leur sang.",
		de: "Dieses uralte Pokémon verwendet seine rasiermesserscharfen Klauen, um seine Opfer aufzuschlitzen und an ihr Blut heranzukommen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274760,
				tcgplayer: 89165
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274760,
				tcgplayer: 89165
			}
		}
	]
}

export default card
