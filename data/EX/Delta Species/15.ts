import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Starmie δ",
		fr: "Staross δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 60,
	types: [
		"Water",
		"Metal",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Metal Navigation",
				fr: "Navigation métallique"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Metal Energy card and attach it to Starmie. Shuffle your deck afterward. This power can't be used if Starmie is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une carte Énergie  et l'attacher à Staross. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Staross est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Energy Loop",
				fr: "Boucle d'énergie"
			},
			effect: {
				en: "Return an Energy card attached to Starmie to your hand.",
				fr: "Reprenez dans votre main une carte Énergie attachée à Staross."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
