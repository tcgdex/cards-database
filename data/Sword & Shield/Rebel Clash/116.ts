import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Splitting Spite",
				fr: "Mépris Partagé"
			},
			effect: {
				en: "Discard the top card of each player’s deck.",
				fr: "Défaussez la carte du dessus du deck de chaque joueur."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dripping Grudge",
				fr: "Rancune Dégoulinante"
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 60,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
