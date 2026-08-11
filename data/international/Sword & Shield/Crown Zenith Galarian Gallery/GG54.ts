import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [889],
	set: Set,

	name: {
		'en-us': "Zamazenta V",
		'fr-fr': "Zamazenta V",
		'es-es': "Zamazenta V",
		'it-it': "Zamazenta V",
		'pt-br': "Zamazenta V",
		'de-de': "Zamazenta V"
	},

	illustrator: "Haru Akasaka",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Regal Stance",
			'fr-fr': "Posture Majestueuse",
			'es-es': "Posición Regia",
			'it-it': "Posa Regale",
			'pt-br': "Postura Real",
			'de-de': "Majestätische Haltung"
		},

		effect: {
			'en-us': "Once during your turn, you may discard your hand and draw 5 cards. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 5 cartes. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes descartar las cartas de tu mano y robar 5 cartas. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare le carte che hai in mano e pescare cinque carte. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar a sua mão e comprar 5 cartas. Se você usar esta Habilidade, o seu turno acabará.",
			'de-de': "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 5 Karten ziehen. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Revenge Blast",
			'fr-fr': "Explo-Vengeance",
			'es-es': "Estallido Venganza",
			'it-it': "Vendicabomba",
			'pt-br': "Raio de Vingança",
			'de-de': "Rachestoß"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691934,
				tcgplayer: 478081
			}
		},
	],
}

export default card
