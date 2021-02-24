import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sylveon",
		fr: "Nymphali",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Moonblast",
				fr: "Pouvoir Lunaire",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beloved Pulse",
				fr: "Impulsion Aimée",
			},
			effect: {
				en: "If you played a TAG TEAM Supporter card from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué une carte Supporter ESCOUADE de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
