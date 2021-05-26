import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resetting Hole",
				fr: "Trou de Réinitialisation",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard any Stadium card in play. If you do, discard this Pokémon and all cards attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toute carte Stade en jeu. Dans ce cas, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Red Knuckles",
				fr: "Poings Rouges",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Ultra Beast, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 10,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
