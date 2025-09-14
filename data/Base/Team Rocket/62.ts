import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Coin Hurl",
				fr: "Lancé de monnaie",
				de: "Coin Hurl"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon and flip a coin. If heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire et lancez une pièce. Si c'est face, cette attaque inflige 20 à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)",
				de: "Choose 1 of your opponent's Pokémon and flip a coin. If heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Ce Pokémon très apprécié gagne ses gages de son propriétaire grâce à sa faculté \"Jour de paye\"."
	},

	thirdParty: {
		cardmarket: 274115,
		tcgplayer: 87313
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
