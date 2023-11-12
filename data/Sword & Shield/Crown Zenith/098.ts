import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V",
		es: "Zamazenta V",
		it: "Zamazenta V",
		pt: "Zamazenta V",
		de: "Zamazenta V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Regal Stance",
			fr: "Posture Majestueuse",
			es: "Posición Regia",
			it: "Posa Regale",
			pt: "Postura Real",
			de: "Majestätische Haltung"
		},

		effect: {
			en: "Once during your turn, you may discard your hand and draw 5 cards. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 5 cartes. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes descartar las cartas de tu mano y robar 5 cartas. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi scartare le carte che hai in mano e pescare cinque carte. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá descartar a sua mão e comprar 5 cartas. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 5 Karten ziehen. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Revenge Blast",
			fr: "Explo-Vengeance",
			es: "Estallido Venganza",
			it: "Vendicabomba",
			pt: "Raio de Vingança",
			de: "Rachestoß"
		},

		effect: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
