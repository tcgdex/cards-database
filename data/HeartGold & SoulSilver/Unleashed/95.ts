import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Suicune & Entei LEGEND",
		fr: "Suicune & Entei LÉGENDE (bas)",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 160,
	types: [
		"Water",
		"Fire",
	],


	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Torrent Blade",
				fr: "Croc torrentiel",
			},
			effect: {
				en: "Return 2 Water Energy attached to Suicune & Entei LEGEND to your hand. Choose one of your opponent's Benched Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Reprenez dans votre main 2 cartes Énergie Water attachées à Suicune & Entei LÉGENDE. Cette attaque inflige 100 dégâts à l'un des Pokémon se trouvant sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bursting Inferno",
				fr: "Enfer explosif",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
