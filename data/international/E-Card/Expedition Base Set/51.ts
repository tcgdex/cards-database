import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'de-de': "Machomei"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [68],

	hp: 120,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Terraforming",
				'fr-fr': "Terraformage",
				'de-de': "Terraforming"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can't be used if Machamp is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 4 cartes du dessus de votre deck et les remettre dans l'ordre que vous désirez. Ce pouvoir ne peut pas être utilisé si Mackogneur est affecté par un État spécial.",
				'de-de': "Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can`t be used if Machamp is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Fist",
				'fr-fr': "Poing de fer",
				'de-de': "Iron Fist"
			},
			effect: {
				'en-us': "Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon.",
				'fr-fr': "Comptez le nombre de vos Pokémon en jeu ayant des marqueurs de dégâts. Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de ces Pokémon.",
				'de-de': "Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86962,
				cardmarket: 274891
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86962,
				cardmarket: 274891
			},
		},
	],
}

export default card
