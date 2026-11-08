import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Will",
		'fr-fr': "Clément",
		'es-es': "Mento",
		'it-it': "Pino",
		'pt-br': "Will",
		'de-de': "Willi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "La prochaine fois que vous lancez des pièces en raison de l’effet d’une attaque, d’un talent ou d’une carte Dresseur pendant ce tour, choisissez pile ou face pour le premier lancer de pièce.",
		'en-us': "The next time you flip any number of coins for the effect of an attack, Ability, or Trainer card this turn, choose heads or tails for the first coin flip.",
		'es-es': "La próxima vez que lances cualquier cantidad de monedas para el efecto de un ataque, habilidad o carta de Entrenador en este turno, elige cara o cruz para el primer lanzamiento de moneda.",
		'it-it': "La prossima volta che lanci una moneta un numero qualsiasi di volte per effetto di un attacco, di un’abilità o di una carta Allenatore durante questo turno, scegli se far uscire testa o croce per il primo lancio.",
		'pt-br': "Na próxima vez que jogar qualquer quantidade de moedas para o efeito de um ataque, Habilidade ou carta de Treinador durante esta rodada, escolha se o resultado é cara ou coroa para a primeira jogada de moeda.",
		'de-de': "Wenn du während dieses Zuges das nächste Mal für den Effekt einer Attacke, Fähigkeit oder Trainerkarte 1 oder mehr Münzen wirfst, wähle Kopf oder Zahl für den ersten Münzwurf."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 408634,
		tcgplayer: 201328
	}
}

export default card
