import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		de: "Magcargo"
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
		en: "Slugma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Magma Pool",
				fr: "Braises",
				de: "Magma Pool"
			},
			effect: {
				en: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't use an Energy card that you used to pay for the Retreat Cost.)",
				fr: "Si Volcaropod est votre Pokémon Actif et s'il retourne sur votre Banc, retirez 1 carte Énergie  attachée à Volcaropod, le cas échéant, et attachez-la au nouveau Pokémon Actif. (Vous ne pouvez pas utiliser une carte Énergie que vous avez déjà utilisée pour payer le Coût de Retraite.)",
				de: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1  Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can´t choose Energy card that you used to pay the Retreat Cost.)"
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
				en: "Lava Flow",
				fr: "Torrent de lave",
				de: "Lava Flow"
			},
			effect: {
				en: "You may discard any number of Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded in this way.",
				fr: "Vous pouvez défausser autant de cartes Énergie  attachées à Volcaropod que vous le désirez. Dans ce cas, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  que vous choisissez de défausser.",
				de: "You may discard any number of  Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each  Energy card you discarded in this way."
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

	description: {
		fr: "La carapace qu'il porte sur le dos n'est qu'une excroissance de peau, refroidie et durcie. Elle se brise au moindre contact."
	},

	thirdParty: {
		cardmarket: 274619,
		tcgplayer: 87012
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

