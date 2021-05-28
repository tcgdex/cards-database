import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Staraptor FB",
		fr: "Etouraptor ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fast Call",
				fr: "Appel rapide",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Staraptor FB is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte Supporter dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Etouraptor  est affecté par un État Spécial.",
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
				en: "Defog",
				fr: "Anti-brume",
			},
			effect: {
				en: "Before doing damage, you may discard any Stadium card in play. If you do, this attack's base damage is 70 instead of 40.",
				fr: "Avant d'infliger des dégâts, vous pouvez défausser n'importe quelle carte Stade en jeu. Les dégâts de base de cette attaque sont alors de 70 au lieu de 40.",
			},
			damage: 40,

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
			value: "-20"
		},
	],




}

export default card
