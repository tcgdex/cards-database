import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mischievous Trick",
				fr: "Sournoiserie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of your face-down Prize cards with the top card of your deck. This power can’t be used if Rotom is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger l’une de vos cartes Récompense qui est face cachée avec la carte du dessus de votre deck. Ce pouvoir ne peut pas être utilisé si Motisma est affecté par un État Spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma Arrow",
				fr: "Flèche plasma",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 20 damage for each Energy attached to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts pour chaque carte Énergie attachée à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Research continues on this Pokémon, which could be the power source of a unique motor."
	}
}

export default card
