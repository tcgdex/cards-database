import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Houndoom",
		fr: "Démolosse de Team Magma",
		de: "Team Magmas Hundemon"
	},

	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Fire",
		"Darkness",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Roasting Heat",
				fr: "Rôtissoire",
				de: "Roasting Heat"
			},
			effect: {
				en: "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magma Spurt",
				fr: "Jet de Magma",
				de: "Magma Spurt"
			},
			effect: {
				en: "Discard the top 5 cards from your deck. This attack does 30 damage times the number of Fire and Fighting basic Energy cards discarded in this way.",
				fr: "Défaussez les 5 premières cartes de votre deck. Cette attaque inflige 30 dégâts multipliés par le nombre de carte Énergie de base  et  défaussées.",
				de: "Discard the top 5 cards from your deck. This attack does 30 damage times the number of  and  basic Energy cards discarded in this way."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275987,
		tcgplayer: 89828
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
