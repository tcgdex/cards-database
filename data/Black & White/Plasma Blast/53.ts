import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Archen",
		fr: "Arkéapti",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		566,
	],
	hp: 70,
	types: [
		"Fightning",
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
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
