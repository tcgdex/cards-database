import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Rapidash",
		fr: "Galopa obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 60,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Ponyta",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Pillar",
				fr: "Colonne de flammes"
			},
			effect: {
				en: "You may discard 1 Energy card attached to Dark Rapidash when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser 1 carte Énergie  attachée à Galopa obscur lorsque vous utilisez cette attaque. Dans ce cas, et si votre adversaire a au moins 1 Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (N'appliquez pas la Faiblesse et la Résistance au Pokémon du Banc)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "C'est un Pokémon sauvage et indomptable. Lorsqu'il galope, on dirait une comète traversant les cieux."
	}
}

export default card
