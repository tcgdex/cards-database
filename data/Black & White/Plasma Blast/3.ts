import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		345,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prehistoric Call",
				fr: "Appel Préhistorique",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
