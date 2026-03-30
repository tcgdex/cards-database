import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Luxio",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	stage: "Stage1",
	evolveFrom: {
		fr: "Lixy",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Rugissement Combatif",
			},
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
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
				fr: "Choc Statique",
			},
			damage: "40",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Atsuko Nishida",

	thirdParty: {
		cardmarket: 877440
	}
}

export default card
