import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cursed Whirlpool",
				fr: "Tourbillon Maudit",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
	],


	retreat: 2,



}

export default card
