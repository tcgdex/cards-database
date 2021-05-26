import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Raging Drill",
				fr: "Perceuse enragée",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each damage counter on Rhyperior.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Rhinastoc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deep Scrap",
				fr: "Grosse bagarre",
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by this attack, discard the top 3 cards from your opponent's deck.",
				fr: "Si le Pokémon Défenseur est mis K.O. par cette attaque, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
