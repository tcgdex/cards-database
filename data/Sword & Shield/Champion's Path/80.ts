import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Suspicious Food Tin",
		fr: "Conserve Douteuse",
		es: "Lata Sospechosa",
		it: "Cibo in Scatola Sospetto",
		pt: "Lata de Comida Suspeita",
		de: "Verdächtige Konserve"
	},

	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Heal 80 damage from 1 of your Pokémon that has at least 1 Psychic Energy attached. If you healed any damage in this way, discard a Psychic Energy from it.",
		fr: "Soignez 80 dégâts de l'un de vos Pokémon auquel est attachée au moins une Énergie Psychic. Si des dégâts sont ainsi soignés, défaussez une Énergie Psychic de ce Pokémon.",
		es: "Cura 80 puntos de puntos de daño a 1 de tus Pokémon que tenga por lo menos 1 Energía Psychic unida a él. Si has curado algún punto de daño de esta manera, descarta 1 Energía Psychic de ese Pokémon.",
		it: "Cura uno dei tuoi Pokémon che ha almeno un'Energia Psychic assegnata da 80 danni. Se hai curato dei danni in questo modo, scarta un'Energia Psychic da quel Pokémon.",
		pt: "Cure 80 pontos de dano de 1 dos seus Pokémon que tiver pelo menos 1 Energia Psychic ligada a ele. Se você curou qualquer dano desta forma, descarte 1 Energia Psychic daquele Pokémon.",
		de: "Heile 80 Schadenspunkte bei 1 deiner Pokémon, an das mindestens 1 Psychic-Energie angelegt ist. Wenn du auf diese Weise Schaden geheilt hast, lege 1 Psychic-Energie von jenem Pokémon auf deinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
