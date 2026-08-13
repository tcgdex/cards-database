import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
		fr: "Kaorine de Team Magma",
		de: "Team Magmas Lepumentas"
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
				en: "Magma Switch",
				fr: "Échange de Magma",
				de: "Magmawechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à un Pokémon dont le nom comporte Team Magma à un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Kaorine de Team Magma est affecté par un État Spécial.",
				de: "Während deines Zuges (vor deinem Angriff) kannst du ein Mal beliebig viele an 1 deiner Pokémon mit „Team Magma“ im Namen angelegten Energiekarten an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht verwenden werden, falls Team Aquas Lepumentas von einem Speziellen Zustand betroffen ist."
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
				en: "Dark Hand",
				fr: "Main sombre",
				de: "Dunkle Hand"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage.",
				fr: "Si vous avez plus de cartes en main que votre adversaire, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn du mehr Karten auf deiner Hand hast als dein Gegner, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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
