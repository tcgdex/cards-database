import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Team Flare Grunt",
		fr: "Sbire de la Team Flare",
		es: "Recluta del Team Flare",
		it: "Recluta del Team Flare",
		pt: "Grunhido da Equipe Flare",
		de: "Team Flare-Rüpel"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		en: "Discard an Energy attached to your opponent's Active Pokémon.",
		es: "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
		it: "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
		pt: "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
		de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281466
	}
}

export default card
