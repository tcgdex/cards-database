import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		de: "Quaputzi"
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
				fr: "Cognobidon",
				de: "Bauchtrommel"
			},
			effect: {
				en: "Put 3 damage counters on Poliwhirl. If this doesn't knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
				fr: "Placez 3 marqueurs de dégâts sur Têtarte. S'il n'est pas K.O., cherchez dans votre deck 2 cartes Énergie de base et attachez-les à Têtarte. Mélangez ensuite votre deck.",
				de: "Lege 3 Schadensmarken auf Quaputzi. Wenn dadurch Quaputzi nicht kampfunfähig wird, durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an Quaputzi an. Mische danach dein Deck."
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
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each W Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Têtarte en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Quaputzi angelegte -Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
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
	},

	thirdParty: {
		cardmarket: 274555
	}
}

export default card
