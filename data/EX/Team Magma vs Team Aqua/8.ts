import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
		fr: "Kaorine de Team Magma",
		de: "Team Magmas Lepumentas"
	},

	illustrator: "Zu-Ka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Psychic",
		"Darkness",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magma Switch",
				fr: "Échange de Magma",
				de: "Magma Switch"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à un Pokémon dont le nom comporte Team Magma à un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Kaorine de Team Magma est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition."
			},
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
				en: "Dark Hand",
				fr: "Main sombre",
				de: "Dark Hand"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage.",
				fr: "Si vous avez plus de cartes en main que votre adversaire, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage."
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

	thirdParty: {
		cardmarket: 275985,
		tcgplayer: 89825
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["tsuguyoshi-yamato"]
		}
	]
}

export default card
