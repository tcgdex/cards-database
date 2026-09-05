import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mach Cut",
				fr: "Coupe Vive",
				de: "Schallschnitt"
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
				de: "Lege 1 an das Verteidigende Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				en: "Dragonblade",
				fr: "Draco-Lame",
				de: "Drachenklinge"
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
				de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
		de: "Dieses sehr seltene Pokémon hat eine andere Farbe als üblich. Es ist schwer zu finden."
	},

	thirdParty: {
		cardmarket: 280998,
		tcgplayer: 85626
	}
}

export default card
