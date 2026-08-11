import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'de-de': "Smettbo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [12],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Miraculous Powder",
				'fr-fr': "Poudre miraculeuse",
				'de-de': "Miraculous Powder"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez annuler tous les États spéciaux sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Papilusion est affecté par un État spécial.",
				'de-de': "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition."
			},
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
				'en-us': "Spiral Drain",
				'fr-fr': "Sangsue spirale",
				'de-de': "Spiral Drain"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 2 damage counters from Butterfree.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégâts sur Papilusion.",
				'de-de': "Flip a coin. If heads, remove 2 damage counters from Butterfree."
			},
			damage: 40,

		},
	],

	retreat: 0,
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84059,
				cardmarket: 274880
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84059,
				cardmarket: 274880
			},
		},
	],
}

export default card
