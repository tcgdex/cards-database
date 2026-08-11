import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Team Yell Grunt",
		'fr-fr': "Sbire de la Team Yell",
		'es-es': "Recluta del Team Yell",
		'it-it': "Recluta del Team Yell",
		'pt-br': "Recruta da Equipe Yell",
		'de-de': "Rüpel von Team Yell"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Put an Energy attached to 1 of your opponent's Pokémon into their hand.",
		'fr-fr': "Ajoutez à la main de votre adversaire une Énergie attachée à l'un de ses Pokémon.",
		'es-es': "Pon 1 Energía unida a 1 de los Pokémon de tu rival en su mano.",
		'it-it': "Prendi un'Energia assegnata a uno dei Pokémon del tuo avversario e aggiungila alle carte che ha in mano.",
		'pt-br': "Coloque 1 Energia ligada a 1 dos Pokémon do seu oponente na mão dele(a).",
		'de-de': "Gib deinem Gegner 1 an eins seiner Pokémon angelegte Energie auf seine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 437014,
		tcgplayer: 208517
	}
}

export default card
