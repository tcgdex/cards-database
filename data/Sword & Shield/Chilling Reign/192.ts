import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Apia",
		en: "Honey",
		es: "Tania",
		it: "Tania",
		pt: "Mel",
		de: "Enia"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		fr: "Piochez une carte pour chacun des Pokémon-V de Banc de votre adversaire.",
		en: "Draw a card for each of your opponent’s Benched Pokémon V.",
		es: "Roba 1 carta por cada uno de los Pokémon V en Banca de tu rival.",
		it: "Pesca una carta per ciascuno dei Pokémon-V nella panchina del tuo avversario.",
		pt: "Compre 1 carta para cada Pokémon V no Banco do seu oponente.",
		de: "Ziehe 1 Karte für jedes Pokémon-V auf der Bank deines Gegners."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card