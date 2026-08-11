import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Houndoom",
		'fr-fr': "Démolosse de Team Magma",
		'de-de': "Team Magmas Hundemon"
	},

	illustrator: "Ken Ikuji",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 70,

	types: [
		"Fire",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Roasting Heat",
				'fr-fr': "Rôtissoire",
				'de-de': "Roasting Heat"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Brûlé, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Burned, this attack does 30 damage plus 20 more damage."
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
				'en-us': "Magma Spurt",
				'fr-fr': "Jet de Magma",
				'de-de': "Magma Spurt"
			},
			effect: {
				'en-us': "Discard the top 5 cards from your deck. This attack does 30 damage times the number of Fire and Fighting basic Energy cards discarded in this way.",
				'fr-fr': "Défaussez les 5 premières cartes de votre deck. Cette attaque inflige 30 dégâts multipliés par le nombre de carte Énergie de base  et  défaussées.",
				'de-de': "Discard the top 5 cards from your deck. This attack does 30 damage times the number of  and  basic Energy cards discarded in this way."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275787,
				tcgplayer: 89828
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275787,
				tcgplayer: 89828
			}
		},
	],

}

export default card
