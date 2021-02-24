import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Spike Spread",
				fr: "Volée de piques",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
			},
			effect: {
				en: "You may switch Forretress with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez échanger Foretress avec un des Pokémon de votre Banc. Dans ce cas, votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
			},
			damage: 30,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
