import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electric Punch",
				fr: "Poing électrique",
				de: "Elektrischer Schlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Shock",
				fr: "Élektri-keu",
				de: "Schwanzschock"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Its fluffy fleece easily stores electricity. Its rubbery hide keeps it from being electrocuted.",
		fr: "Son épaisse toison stocke l'électricité. Sa peau caoutchouteuse le sauve de l'électrocution.",
		de: "Sein wuscheliges Flies speichert Energie problemlos. Seine borstige Haut sorgt dafür, dass es sich nicht selber unter Strom setzen kann."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274614,
				tcgplayer: 85473
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274614,
				tcgplayer: 85473
			}
		}
	]
}

export default card

