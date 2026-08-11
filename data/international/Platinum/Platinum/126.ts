import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Shaymin LV.X",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 100,

	types: [
		"Grass"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thankfulness",
				'fr-fr': "Gratitude",
				'de-de': "Thankfulness"
			},
			effect: {
				'en-us': "Each of your Grass Pokémon (excluding any Shaymin) gets +40 HP. You can't use more than 1 Thankfulness Poké-Body each turn.",
				'fr-fr': "Chacun de vos Pokémon Grass (les Shaymin exclus) obtient 40 PV supplémentaires. Vous ne pouvez pas utiliser plus d'1 Poké-Body Gratitude par tour.",
				'de-de': "Each of your  Pokémon (excluding Shaymin) gets +40 HP. You can't use more than 1 Thankfulness Poké-Body each turn."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seed Flare",
				'fr-fr': "Fulmigraine",
				'de-de': "Seed Flare"
			},
			effect: {
				'en-us': "Choose as many Grass Energy cards from your hand as you like and attach them to your Pokémon in any way you like. If you do, this attack does 40 damage plus 20 more damage for each Grass Energy attached in this way.",
				'fr-fr': "Choisissez autant de cartes Énergie Grass de votre main que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Grass attachée de cette façon.",
				'de-de': "Choose as many  Energy cards from your hand as you like and attach them to your Pokémon in any way you like. If you do, this attack does 40 damage plus 20 more damage for each  Energy attached in this way."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89114,
				cardmarket: 278547
			}
		}
	]
}

export default card
