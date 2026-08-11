import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Happy Dance",
				'fr-fr': "Danse de bonheur",
				'de-de': "Happy Dance"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. You can't use more than 1 Happy Dance Poké-Power each turn. This power can't be used if Ludicolo is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 1 marqueur de dégât à chacun de vos Pokémon. Vous ne pouvez pas utiliser plus d'1 Poké-Power Danse de bonheur par tour. Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par un État Spécial.",
				'de-de': "Once during your turn (bafore your attack), you may remove 1 damage counter from each of your Pokémon. You can't use more than 1 Happy Dance Poke-Power each turn. This power can't be used if Ludicolo is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Punch",
				'fr-fr': "Poing d'O",
				'de-de': "Water Punch"
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to Ludicolo. This attack does 40 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie  attachée à Ludicolo. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de faces.",
				'de-de': "Flip a coin for each  Energy attached to Ludicolo. This attack does 40 damage plus 20 more damage for each heads."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86898,
				cardmarket: 276422
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86898,
				cardmarket: 276422
			},
		},
	],

}

export default card
