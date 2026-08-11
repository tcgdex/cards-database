import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [331],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sneaky Attack",
				'fr-fr': "Coup Bas",
				'de-de': "Sneaky Attack"
			},
			effect: {
				'en-us': "If Cacnea has any Darkness Energy attached to it, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si Cacnea possède de l'Énergie Darkness, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "If Cacnea has any  Energy attached to it, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Shoot Needle",
				'fr-fr': "Coup de dard",
				'de-de': "Shoot Needle"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) (Vous pouvez choisir le même Pokémon plus d'une fois mais vous ne pouvez pas lui infliger plus de 10 dégâts de cette façon).",
				'de-de': "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By storing water in its body, this desert dweller can survive 30 days without water."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84076,
				cardmarket: 278488
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278488,
				tcgplayer: 84076
			}
		}
	],

}

export default card
