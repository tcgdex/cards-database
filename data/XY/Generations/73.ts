import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
		de: "Team Flare-Rüpel"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		en: "Discard an Energy attached to your opponent's Active Pokémon.",
		de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288508,
		tcgplayer: 113731
	}
}

export default card
