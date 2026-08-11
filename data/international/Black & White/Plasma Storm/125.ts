import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Team Plasma Grunt",
		'fr-fr': "Sbire de la Team Plasma",
		'es-es': "Recluta del Equipo Plasma",
		'it-it': "Seguace del Team Plasma",
		'pt-br': "Grunhido da Equipe Plasma",
		'de-de': "Team Plasma Rüpel"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une carte de la Team Plasma de votre main. (Si vous ne pouvez pas défausser une carte de la Team Plasma, vous ne pouvez pas jouer cette carte.) Piochez 4 cartes.",
		'en-us': "Discard a Team Plasma card from your hand. (If you can’t discard a Team Plasma card, you can’t play this card.) Draw 4 cards.",
		'es-es': "Descarta una carta del Equipo Plasma de tu mano. (Si no puedes descartar una carta del Equipo Plasma, no puedes jugar esta carta.) Roba 4 cartas.",
		'it-it': "Scarta una carta Team Plasma presente tra le carte che hai in mano (se non puoi scartare una carta Team Plasma, non puoi giocare questa carta). Pesca quattro carte.",
		'pt-br': "Descarte um card de Equipe Plasma da sua mão. (Se você não puder descartar um card de Equipe Plasma, não poderá jogar esse card.) Compre 4 cards.",
		'de-de': "Lege 1 Team-Plasma-Karte von deiner Hand auf deinen Ablagestapel. (Wenn du keine Team-Plasma-Karte auf deinen Ablagestapel legen kannst, kannst du diese Karte nicht spielen.) Ziehe 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280865,
		tcgplayer: 89849
	}
}

export default card
