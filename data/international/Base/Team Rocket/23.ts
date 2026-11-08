import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Dugtrio",
		'fr-fr': "Triopikeur obscur",
		'de-de': "Dunkles Digdri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Sinkhole",
				'fr-fr': "Chausse-trappe",
				'de-de': "erdloch"
			},
			effect: {
				'en-us': "Whenever your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Chaque fois que le Pokémon Actif de votre adversaire bat en retraite, votre adversaire lance une pièce. Si c'est pile, ce pouvoir inflige 20 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance). Ce pouvoir cesse de fonctionner lorsque Triopikeur obscur est Endormi, Confus ou Paralysé.",
				'de-de': "Jedesmal, wenn sich das aktive Pokémon deines Gegners zurückzieht, wirft dein Gegner eine Münze. Bei Zahl fügt diese Fähigkeit diesem Pokémon 20 Schadenspunkte zu. (Schwäche und Resistenz nicht anwenden.) Diese Fähigkeit verliert ihre Wirkung, solangeDunkles Digdri schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Knock Down",
				'fr-fr': "Renversement",
				'de-de': "Niederreissen"
			},
			effect: {
				'en-us': "Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.",
				'fr-fr': "Votre adversaire lance une pièce. Si c'est pile, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est face, cette attaque inflige 20 dégâts.",
				'de-de': "Dein Gegner wirft eine Münze. Bei Zahl fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Scadenspunkte zu. Bei Kopf fügt dieser Angriff 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Digs large sinkholes in the ground and tries to trap its enemies in them.",
		'fr-fr': "Il creuse de larges pièges dans le sol afin d'attraper ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274059,
				tcgplayer: 84589
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274059,
				tcgplayer: 84589
			}
		}
	]
}

export default card
