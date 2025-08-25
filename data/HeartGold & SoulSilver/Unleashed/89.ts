import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		de: "Ursaring"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Berserk",
				fr: "Fou-furieux",
				de: "Berserker"
			},
			effect: {
				en: "If Ursaring has any damage counters on it, each of Ursaring’s attacks does 60 more damage (before applying Weakness and Resistance).",
				fr: "Si Ursaring a des marqueurs de dégât, chacune de ses attaques inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn auf Ursaring mindestens 1 Schadensmarke liegt, fügen sämtliche Angriffe Ursarings 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
				de: "Hammerarm"
			},
			effect: {
				en: "Discard the top card from your opponent’s deck.",
				fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Lariat",
				fr: "Lasso titanesque",
				de: "Megatonnenlasso"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279183,
		tcgplayer: 90255
	}
}

export default card
