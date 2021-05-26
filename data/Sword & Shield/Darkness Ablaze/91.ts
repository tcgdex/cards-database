import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon"
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Labyrinth of Sand",
				fr: "Labyrinthe de Sable"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon can’t retreat.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Desert Geyser",
				fr: "Geyser du Désert"
			},
			effect: {
				en: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
				fr: "Si votre adversaire a un Stade en jeu, défaussez-le. Si vous avez défaussé un Stade de cette façon, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d’attaques infligés à ce Pokémon."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
