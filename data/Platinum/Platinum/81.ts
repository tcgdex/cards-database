import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [270],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Ball",
				fr: "Eco-Sphère",
				de: "Energieball"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Nénupiot qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Loturzel angelegte Energie zu, die nicht zum Bezahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				de: "Synthese"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie Grass et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Wirf 1 Münze. Bei „Kopf“ durchsuche dein Deck nach 1 {G}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It looks like an aquatic plant and serves as a ferry to Pokémon that can't swim.",
		de: "Es sieht aus wie eine Wasserpflanze. Es dient den PKMN, die nicht schwimmen können, als Fähre."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86837,
				cardmarket: 278419
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278419,
				tcgplayer: 86837
			}
		}
	],

}

export default card
