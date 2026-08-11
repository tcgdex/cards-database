import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'de-de': "Quaputzi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Belly Drum",
				'fr-fr': "Cognobidon",
				'de-de': "Bauchtrommel"
			},
			effect: {
				'en-us': "Put 3 damage counters on Poliwhirl. If this doesn't knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur Têtarte. S'il n'est pas K.O., cherchez dans votre deck 2 cartes Énergie de base et attachez-les à Têtarte. Mélangez ensuite votre deck.",
				'de-de': "Lege 3 Schadensmarken auf Quaputzi. Wenn dadurch Quaputzi nicht kampfunfähig wird, durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an Quaputzi an. Mische danach dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Aquaknarre"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each W Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Têtarte en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Quaputzi angelegte -Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The swirl on its belly undulates. Staring at it may gradually cause drowsiness.",
		'fr-fr': "La spirale sur son ventre ondule subtilement. A force de la regarder, on risque de s'assoupir."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274555,
				tcgplayer: 88262
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274555,
				tcgplayer: 88262
			}
		}
	]
}

export default card

