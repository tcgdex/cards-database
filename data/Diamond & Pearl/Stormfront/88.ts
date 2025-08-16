import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Poké Blower +",
		fr: "Poké Coup +",
		de: "Poké-Puster +"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous pouvez jouer 2 Poké Coup + en même temps. Si vous jouez 1 Coup Guérison +, lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire. Si vous jouez 2 Poké Coup +, choisissez 1 des Pokémon de Banc de votre adversaire et échangez-le avec 1 de ses Pokémon Actifs.",
		de: "Du darfst 2 Poké-Puster + Karten gleichzeitig spielen. Wenn du 1 Poké-Puster + Karte spielst, wirf 1 Münze. Bei \"Kopf\" lege 1 Schadensmarke auf 1 Pokémon deines Gegners. Wenn du 2 Poké-Puster + Karten spielst, wähle 1 Pokémon auf der Bank deines Gegners und tausche es gegen 1 Aktives Pokémon deines Gegners aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278386
	}
}

export default card
