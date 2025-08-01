import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spirit Compressor",
				fr: "Réducteur d’Âmes",
				es: "Compresor de Espíritus",
				it: "Compressore Spirituale",
				pt: "Compressor Espiritual",
				de: "Seelenkompressor"
			},
			effect: {
				en: "Search your deck for up to 4 Pokémon and discard them. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 4 Pokémon dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 4 Pokémon y descártalos. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a quattro Pokémon e scartali. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 4 Pokémon no seu baralho e descarte-os. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 4 Pokémon und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
				es: "Disparo Embrujado",
				it: "Colpomistero",
				pt: "Tiro Assustador",
				de: "Spukschuss"
			},

			damage: 20,

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369019
	}
}

export default card
