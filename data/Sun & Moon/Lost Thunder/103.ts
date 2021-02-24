import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Vortex of Pain",
				fr: "Vortex Douloureux",
			},
			effect: {
				en: "This attack does 20 damage for each damage counter on all of your opponent's Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
			},
			damage: 20,

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
