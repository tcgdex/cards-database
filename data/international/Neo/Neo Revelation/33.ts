import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'de-de': "Magcargo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Magma Pool",
				'fr-fr': "Braises",
				'de-de': "Magma Pool"
			},
			effect: {
				'en-us': "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't use an Energy card that you used to pay for the Retreat Cost.)",
				'fr-fr': "Si Volcaropod est votre Pokémon Actif et s'il retourne sur votre Banc, retirez 1 carte Énergie  attachée à Volcaropod, le cas échéant, et attachez-la au nouveau Pokémon Actif. (Vous ne pouvez pas utiliser une carte Énergie que vous avez déjà utilisée pour payer le Coût de Retraite.)",
				'de-de': "If Magcargo is your Active Pokémon and moves to the Bench, remove 1  Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can´t choose Energy card that you used to pay the Retreat Cost.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Lava Flow",
				'fr-fr': "Torrent de lave",
				'de-de': "Lava Flow"
			},
			effect: {
				'en-us': "You may discard any number of Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded in this way.",
				'fr-fr': "Vous pouvez défausser autant de cartes Énergie  attachées à Volcaropod que vous le désirez. Dans ce cas, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  que vous choisissez de défausser.",
				'de-de': "You may discard any number of  Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each  Energy card you discarded in this way."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "The shell on its back is just skin that has cooled and hardened. It breaks easily with a slight touch.",
		'fr-fr': "La carapace qu'il porte sur le dos n'est qu'une excroissance de peau, refroidie et durcie. Elle se brise au moindre contact."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274619,
				tcgplayer: 87012
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274619,
				tcgplayer: 87012
			}
		}
	]
}

export default card

