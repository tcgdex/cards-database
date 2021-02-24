import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Blacephalon",
		fr: "Pierroteknik",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		806,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Blazer",
				fr: "Brasero",
			},
			effect: {
				en: "Turn 1 of your face-down Prize cards face up. If it's a Fire Energy card, this attack does 50 more damage. (That Prize card remains face up for the rest of the game.)",
				fr: "Retournez l’une de vos cartes Récompense (actuellement face cachée) face découverte. Si c’est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires. (Cette carte Récompense reste face découverte pour le reste de la partie.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fireball Circus",
				fr: "Cirque Boule de Feu",
			},
			effect: {
				en: "Discard any number of Fire Energy cards from your hand. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez autant de cartes Énergie Fire que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
