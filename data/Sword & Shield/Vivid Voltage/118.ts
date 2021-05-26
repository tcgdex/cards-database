import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitation Field",
				fr: "Champ de Lévitation"
			},
			effect: {
				en: "Your Pokémon in play have no Retreat Cost.",
				fr: "Vos Pokémon en jeu n’ont pas de Coût de Retraite."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leg Quake",
				fr: "Piétinement Sismique"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolution Pokémon, it can’t attack during your opponent’s next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
