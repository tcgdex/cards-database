import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		de: "Jirachi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wishing Star",
				fr: "Étoile à souhait",
				de: "Wishing Star"
			},
			effect: {
				en: "Once during your turn (before your attack), if Jirachi is your Active Pokémon, you may look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle your deck afterward. Jirachi and your other Active Pokémon, if any, are now Asleep. This power can't be used if Jirachi is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Jirachi est votre Pokémon Actif, vous pouvez regarder les 5 cartes du dessus de votre deck, en choisir 1 et la placer dans votre main. Ensuite, mélangez votre deck. Jirachi et votre autre Pokémon Actif, si vous en avez un, sont maintenant Endormis. Ce pouvoir ne peut pas être utilisé si Jirachi est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Jirachi is your Active Pokémon, you may look at the top 5 cards of your deck, choose 1 of them and put it into your hand. Shuffle your deck afterward. Jirachi and your other Active Pokémon, if any, are now Asleep. This power can't be used if Jirachi is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metallic Blow",
				fr: "Coup métallique",
				de: "Metallic Blow"
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Bodies, this attack does 20 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède des Poké-Bodies, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				de: "If the Defending Pokémon has any Poke-Bodies, this attack does 20 damage plus 30 more damage."
			},
			damage: "20+",

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
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 86327,
		cardmarket: 276412
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["curran-hill"]
		},
		{
			type: "holo",
			stamp: ["michael-gonzalez"]
		},
	]
}

export default card

