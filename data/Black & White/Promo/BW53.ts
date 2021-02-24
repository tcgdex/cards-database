import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
	},
	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sand Slammer",
				fr: "Prison de Sable",
			},
			effect: {
				en: "At any time between turns, if this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon.",
				fr: "N'importe quand entre chaque tour, si ce Pokémon est votre Pokémon Actif, placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flying Beatdown",
				fr: "Dérouillée Volante",
			},
			effect: {
				en: "You may discard a Grass Energy and a Fighting Energy attached to this Pokémon. If you do, the Defending Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser une Énergie Grass et une Énergie Fighting attachées à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
