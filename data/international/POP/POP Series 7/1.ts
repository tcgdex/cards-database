import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Ampharos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 130,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Jamming",
				'fr-fr': "Encombrement"
			},
			effect: {
				'en-us': "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
				'fr-fr': "Une fois que votre adversaire a joué une carte Supporter de sa main, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Body Encombrement par tour."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cluster Bolt",
				'fr-fr': "Groupe d'éclairs"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez défausser toutes les Énergies  attachées à Pharamp. Cette attaque inflige alors 20 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "The tip of its tail shines brightly. In the olden days, people sent signals using the tail’s light."
	},

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83542,
				cardmarket: 278033
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83542,
				cardmarket: 278033
			},
		},
	],

}

export default card
