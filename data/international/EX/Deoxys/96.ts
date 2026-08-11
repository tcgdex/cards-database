import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Crobat ex",
		'fr-fr': "Nostenfer ex",
		'de-de': "Iksbat ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Distortion",
				'fr-fr': "Déformation",
				'de-de': "Distortion"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Crobat ex is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Crobat ex is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Nostenfer ex est votre Pokémon Actif, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de votre adversaire. Ce pouvoir ne peut pas être utilisé si Nostenfer ex est affecté par un État Spécial.",
				'de-de': "Once during yout turn (before your attack), if Crobat ex is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon. This power can't be used if Crobat ex is affected by a Special Condition."
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
				'en-us': "Cross Attack",
				'fr-fr': "Attaque croisée",
				'de-de': "Cross Attack"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez 2 faces ou plus, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused."
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pester",
				'fr-fr': "Abattre",
				'de-de': "Pester"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 60 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is affected by a Special Condition, this attack does 60 damage plus 40 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84493,
				cardmarket: 276499
			},
		},
	],

}

export default card
