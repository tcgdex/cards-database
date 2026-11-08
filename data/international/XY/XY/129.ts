import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Team Flare Grunt",
		'fr-fr': "Sbire de la Team Flare",
		'es-es': "Recluta del Team Flare",
		'it-it': "Recluta del Team Flare",
		'pt-br': "Grunhido da Equipe Flare",
		'de-de': "Team Flare-Rüpel"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		'en-us': "Discard an Energy attached to your opponent's Active Pokémon.",
		'es-es': "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
		'it-it': "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
		'pt-br': "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
		'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281466,
		tcgplayer: 89804
	}
}

export default card
