import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strobe Shock",
				fr: "Strobochoc",
			},
			effect: {
				en: "Your opponent reveals their hand. If you find any Energy cards there, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
