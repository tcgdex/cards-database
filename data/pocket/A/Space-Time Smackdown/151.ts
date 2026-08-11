import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Galactic Grunt",
		'fr-fr': "Sbire de la Team Galaxie",
		'es-es': "Recluta del Equipo Galaxia",
		'it-it': "Recluta del Team Galassia",
		'de-de': "Rüpel von Team Galaktik",
		'pt-br': "Recruta da Equipe Galáctica",
		'ko-kr': "갤럭시단의 조무래기"
	},

	illustrator: "GOSSAN",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 random Glameow, Stunky, or Croagunk from your deck into your hand.",
		'fr-fr': "Ajoutez une carte au hasard parmi Chaglam, Moufouette, et Cradopaud de votre deck à votre main.",
		'es-es': "Pon 1 carta aleatoria de entre Glameow, Stunky o Croagunk de tu baraja en tu mano.",
		'it-it': "Prendi una carta a caso dal tuo mazzo fra le seguenti: Glameow, Stunky e Croagunk. Poi aggiungila alle carte che hai in mano.",
		'de-de': "Nimm von den Karten Charmian, Skunkapuh und Glibunkel 1 zufällige aus deinem Deck auf deine Hand.",
		'pt-br': "Coloque aleatoriamente 1 carta dentre Glameow, Stunky e Croagunk do seu baralho na sua mão.",
		'ko-kr': "자신의 덱에서 「나옹마」「스컹뿡」「삐딱구리」 랜덤으로 1장 패로 가져온다."
	},

	trainerType: "Supporter",
	boosters: ["dialga"]
}

export default card
