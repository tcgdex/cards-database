import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Claydol",
		'fr-fr': "Kaorine de Team Magma",
		'de-de': "Team Magmas Lepumentas"
	},

	illustrator: "Zu-Ka",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [344],

	hp: 80,

	types: [
		"Psychic",
		"Darkness"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Magma Switch",
				'fr-fr': "Échange de Magma",
				'de-de': "Magma Switch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à un Pokémon dont le nom comporte Team Magma à un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Kaorine de Team Magma est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Hand",
				'fr-fr': "Main sombre",
				'de-de': "Dark Hand"
			},
			effect: {
				'en-us': "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si vous avez plus de cartes en main que votre adversaire, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 89825
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 89825
			}
		},
		{
			type: "holo",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				tcgplayer: 477450
			}
		}
	],

}

export default card
