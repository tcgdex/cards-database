import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Ho-Oh-EX",
		fr: "Ho-Oh-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 160,
	types: [
		"Fire",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rebirth",
				fr: "Renaissance",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may flip a coin. If heads, put this Pokémon onto your Bench and attach 3 different types of basic Energy cards from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez lancer une pièce. Si c'est face, placez ce Pokémon sur votre Banc et attachez 3 différents types de cartes Énergie de base de votre pile de défausse à ce Pokémon.",
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
				en: "Rainbow Burn",
				fr: "Brûlure Arc-en-ciel",
			},
			effect: {
				en: "Does 20 more damage for each different type of basic Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
