import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Scyther",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		fr: "Insécateur",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames",
			},
			effect: {
				en: "During your next turn, Scyther's Slashing Strike attack's base damage is 60.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Coup déchirant d'Insécateur sont de 60.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
			},
			effect: {
				en: "During your next turn, Scyther can't use Slashing Strike.",
				fr: "Lors de votre prochain tour, Insécateur ne peut pas utiliser Coup déchirant.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
