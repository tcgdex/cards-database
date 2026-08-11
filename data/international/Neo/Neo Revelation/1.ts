import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'de-de': "Ampharos"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Attract Current",
				'fr-fr': "Courant d'attraction",
				'de-de': "Attract Current"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, you may search your deck for a L Energy card and attach it to 1 of your L Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez 3 pièces. Pour chaque face, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à l'un de vos Pokémon . Mélangez ensuite votre deck.",
				'de-de': "Flip 3 coins. For each heads, you may search your deck for a  Energy card and attach it to 1 of your  Pokémon. Shuffle your deck afterward."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gigavolt",
				'fr-fr': "Gigavolt",
				'de-de': "Gigavolt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
		'fr-fr': "L'extrémité lumineuse de sa queue est visible de très loin. Depuis l'antiquité, elle sert de balise aux gens perdus."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274587,
				tcgplayer: 83535
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274587,
				tcgplayer: 83535
			}
		}
	]
}

export default card
