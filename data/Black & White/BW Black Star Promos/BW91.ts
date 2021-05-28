import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},
	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrigun",
				fr: "Pistolectrique",
			},
			effect: {
				en: "You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
