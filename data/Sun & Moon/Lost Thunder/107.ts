import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
		es: "Poipole",
		it: "Poipole",
		pt: "Poipole",
		de: "Venicro"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		803,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eye Opener",
				fr: "Ouvrir les Yeux",
				es: "Bebida Amanecer",
				it: "Sbirciata",
				pt: "Olhos Abertos",
				de: "Spähen"
			},
			effect: {
				en: "Look at your face-down Prize cards.",
				fr: "Regardez vos cartes Récompense (actuellement face cachée).",
				es: "Mira tus cartas de Premio que están boca abajo.",
				it: "Guarda le tue carte Premio coperte.",
				pt: "Olhe as suas cartas de Prêmio viradas para baixo.",
				de: "Sieh dir deine verdeckten Preiskarten an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365744
	}
}

export default card
