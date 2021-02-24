import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw Off",
				fr: "Ronger jusqu'au bout",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 60 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 60 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sucker Punch",
				fr: "Coup Bas",
			},
			effect: {
				en: "If Raticate has any Darkness Energy attached to it, this attack does 20 damage plus 20 more damage.",
				fr: "Si Rattatac possède de l'Énergie Darkness, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],





}

export default card
