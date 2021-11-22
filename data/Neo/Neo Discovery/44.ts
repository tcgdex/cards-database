import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte"
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
		en: "Poliwag",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Belly Drum",
				fr: "Cognobidon"
			},
			effect: {
				en: "Put 3 damage counters on Poliwhirl. If this doesn't knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
				fr: "Placez 3 marqueurs de dégâts sur Têtarte. S'il n'est pas K.O., cherchez dans votre deck 2 cartes Énergie de base et attachez-les à Têtarte. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each W Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Têtarte en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
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

	description: {
		fr: "La spirale sur son ventre ondule subtilement. A force de la regarder, on risque de s'assoupir."
	}
}

export default card
