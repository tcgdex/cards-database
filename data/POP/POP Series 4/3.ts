import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Levitate",
				fr: "Lévitation"
			},
			effect: {
				en: "As long as Flygon has any Energy attached to it, the Retreat Cost for Flygon is 0.",
				fr: "Tant que Libegon possède de l'Énergie, son Coût de retraite est de 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Pit",
				fr: "Bac à sable"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277468,
		tcgplayer: 85524
	}
}

export default card
