import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nurture and Heal",
				fr: "Nourri-Guéri",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, heal 30 damage from that Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon. Dans ce cas, soignez 30 dégâts au Pokémon choisi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jungle Edge",
				fr: "Dague Végétale",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
