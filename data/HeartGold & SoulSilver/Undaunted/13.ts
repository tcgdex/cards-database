import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka"
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
				de: "Stachelstreuung"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				de: "Gyroball"
			},
			effect: {
				en: "You may switch Forretress with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez échanger Foretress avec un des Pokémon de votre Banc. Dans ce cas, votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
				de: "Du darfst Forstellka gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	description: {
		en: "It remains immovably rooted to its tree. It scatters pieces of its hard shell to drive its enemies away."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279256,
		tcgplayer: 85552
	}
}

export default card
