import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
		fr: "Goelise",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Guzzle",
				fr: "Goinfre",
			},
			effect: {
				en: "Choose up to 2 basic Water Energy cards from your hand and attach them to Pelipper. Remove 2 damage counters for each Energy card attached in this way.",
				fr: "Choisissez jusqu'à 2 cartes Énergie de base (W) de votre main et attachez-les à Bekipan. Retirez 2 marqueurs de dégât pour chaque carte Énergie attachée de cette façon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Return",
				fr: "Retour de jet",
			},
			effect: {
				en: "Does 30 damage times the number of Energy cards attached to Pelipper. Then, put all Energy cards attached to Pelipper on top of your deck. Shuffle your deck afterward.",
				fr: "Inflige 30 dégâts multipliés par le nombre de cartes Énergie attachées à Bekipan. Ensuite, placez toutes les cartes Énergie attachées à Bekipan au dessus de votre deck. Puis, mélangez votre deck.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
