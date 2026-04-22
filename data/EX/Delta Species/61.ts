import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph",
		de: "Ditto"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Duplicate",
				fr: "Duplicata",
				de: "Duplicate"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un autre Metamorph et l'échanger avec Metamorph. (Toutes les cartes attachées à Metamorph, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Metamorph au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Duplicata par tour.",
				de: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on the top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d'artifices",
				de: "Fireworks"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Ditto.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Metamorph.",
				de: "Flip a coin. If tails, discard a  Energy card attached to Ditto."
			},
			damage: 30,

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
		cardmarket: 276798,
		tcgplayer: 84838
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["origins"]
		},
	]
}

export default card
