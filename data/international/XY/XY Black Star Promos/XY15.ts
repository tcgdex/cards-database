import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Cotton Guard",
				'fr-fr': "Cotogarde",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Ball",
				'fr-fr': "Boule Dodo",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	thirdParty: {
		cardmarket: 281332
	}
}

export default card
