import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [235],

	hp: 70,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Sketch",
				fr: "Gribouille",
				es: "Esquema",
				it: "Schizzo",
				pt: "Esboço",
				de: "Nachahmer"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre 1 carta.",
				de: "Ziehe 1 Karte."
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Golpe de Cola",
				it: "Codacolpo",
				pt: "Golpe de Cauda",
				de: "Schwanzschlag"
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

