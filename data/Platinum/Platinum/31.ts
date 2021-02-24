import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Rushing Flames",
				fr: "Flammes dévorantes",
			},
			effect: {
				en: "Discard as many Fire Energy as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads.",
				fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon en jeu que vous voulez. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 80 dégâts multipliés par le nombre de faces.",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each damage counter on Infernape.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Simiabraz.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
