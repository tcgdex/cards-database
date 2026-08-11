import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Ditto",
		'fr-fr': "Metamorph",
		'de-de': "Ditto"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
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
				'en-us': "Duplicate",
				'fr-fr': "Duplicata",
				'de-de': "Duplicate"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un autre Metamorph et l'échanger avec Metamorph. (Toutes les cartes attachées à Metamorph, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Metamorph au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Duplicata par tour.",
				'de-de': "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on the top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn."
			},
		},
	],

	attacks: [
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
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Ditto.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Metamorph.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Ditto."
			},
			damage: "10+",

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
		tcgplayer: 84834
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

