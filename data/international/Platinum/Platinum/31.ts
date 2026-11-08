import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'de-de': "Panferno"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [392],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Rushing Flames",
				'fr-fr': "Flammes dévorantes",
				'de-de': "Rushing Flames"
			},
			effect: {
				'en-us': "Discard as many Fire Energy cards as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads.",
				'fr-fr': "Défaussez autant d'Énergies Fire attachées à vos Pokémon en jeu que vous voulez. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 80 dégâts multipliés par le nombre de faces.",
				'de-de': "Discard as many  Energy as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads."
			},
			damage: "80×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each damage counter on Infernape.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Simiabraz.",
				'de-de': "Does 30 damage plus 10 more damage for each damage counter on Infernape."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		'en-us': "It uses unique fighting moves with fires on its hands and feet. It will take on any opponent."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86277,
				cardmarket: 278452
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278452,
				tcgplayer: 86277
			}
		}
	],

	retreat: 0
}

export default card
