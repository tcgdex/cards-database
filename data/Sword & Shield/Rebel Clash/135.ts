import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Big Shield",
				fr: "Bouclier Imposant"
			},
			effect: {
				en: "All of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Big Shield Ability at a time.",
				fr: "Tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu’un talent Bouclier Imposant à la fois."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Edge",
				fr: "Lame Puissante"
			},

			damage: 130,

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
	hp: 140,
	types: ["Metal"],
	regulationMark: "D"
}

export default card
