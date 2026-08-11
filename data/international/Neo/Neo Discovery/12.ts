import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'de-de': "Despotar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'de-de': "Slam"
			},

			effect: {
				'en-us': "Flip 2 coins. This attack does 30 times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 30 damage times the number of heads."
			},

			damage: "30x"
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trample",
				'fr-fr': "Bousculade",
				'de-de': "Trample"
			},
			effect: {
				'en-us': "For each Benched Pokémon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Pour chaque Pokémon sur le Banc (celui de votre adversaire et le vôtre), lancez une pièce. Si c'est face, cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "For each Benched Pokémon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.",
		'fr-fr': "Son corps est invulnérable à toutes les attaques, alors il s'empresse de défier ses ennemis."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274523,
				tcgplayer: 90113
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274523,
				tcgplayer: 90113
			}
		}
	]
}

export default card
