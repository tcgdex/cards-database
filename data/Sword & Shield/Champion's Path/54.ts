import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hyper Potion",
		fr: "Hyper Potion",
		es: "Hiperpoción",
		it: "Iperpozione",
		pt: "Hiperpoção",
		de: "Hypertrank"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Heal 120 damage from 1 of your Pokémon that has at least 2 Energy attached. If you healed any damage in this way, discard 2 Energy from it.",
		fr: "Soignez 120 dégâts de l'un de vos Pokémon auquel sont attachées au moins 2 Énergies. Si des dégâts sont ainsi soignés, défaussez 2 Énergies de ce Pokémon.",
		es: "Cura 120 puntos de daño a 1 de tus Pokémon que tenga por lo menos 2 Energías unidas a él. Si has curado algún punto de daño de esta manera, descarta 2 Energías de ese Pokémon.",
		it: "Cura uno dei tuoi Pokémon che ha almeno due Energie assegnate da 120 danni. Se hai curato dei danni in questo modo, scarta due Energie da quel Pokémon.",
		pt: "Cure 120 pontos de dano de 1 dos seus Pokémon que tiver pelo menos 2 Energias ligadas a ele. Se você curou qualquer dano desta forma, descarte 2 Energias daquele Pokémon.",
		de: "Heile 120 Schadenspunkte bei 1 deiner Pokémon, an das mindestens 2 Energien angelegt sind. Wenn du auf diese Weise Schaden geheilt hast, lege 2 Energien von jenem Pokémon auf deinen Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
