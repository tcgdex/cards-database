import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		523,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sprint",
				fr: "Sprint",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard your hand and draw 4 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser votre main et piocher 4 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
