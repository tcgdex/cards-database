import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Road",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon was on the Bench and became your Active Pokémon this turn, you may move any number of Fire Energy attached to your Pokémon to this Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Scorching Breath",
				fr: "Talent : Route Enflammée",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif lors de ce tour, vous pouvez déplacer des Énergies Fire attachées à vos Pokémon vers ce Pokémon.",
			},
			damage: 150,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Souffle Brûlant",
			},
			effect: {
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
