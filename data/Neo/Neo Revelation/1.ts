import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
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
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Attract Current",
				fr: "Courant d'attraction",
				de: "Stromanziehung"
			},
			effect: {
				en: "Flip 3 coins. For each heads, you may search your deck for a L Energy card and attach it to 1 of your L Pokémon. Shuffle your deck afterward.",
				fr: "Lancez 3 pièces. Pour chaque face, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à l'un de vos Pokémon . Mélangez ensuite votre deck.",
				de: "Wirf drei Münzen. Für jedesmal „Kopf“ darfst du dein Deck nach einer {L}-Energiekarte durchsuchen und an eines deiner {L}-Pokémon anlegen. Mische dein Deck danach."
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
				en: "Gigavolt",
				fr: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff 40 Schadenspunkte zu, und das verteidigende Pokémon ist jetzt gelähmt."
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
		en: "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
		fr: "L'extrémité lumineuse de sa queue est visible de très loin. Depuis l'antiquité, elle sert de balise aux gens perdus.",
		de: "Das helle Licht auf seiner Schwanzspitze kann von weitem gesehen werden. Es dient schon seit langen Zeiten als Signalgeber."
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
