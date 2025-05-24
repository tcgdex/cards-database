import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		en: "Minun",
		fr: "Négapi",
		es: "Minun",
		it: "Minun",
		pt: "Minun",
		de: "Minun"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Buddy Pulse",
			fr: "Impulsion Partenaire",
			es: "Pulso Amigo",
			it: "Impulso Amico",
			pt: "Pulso Amigo",
			de: "Kumpelpuls"
		},

		effect: {
			en: "If you have Plusle in play, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon. The effect of Buddy Pulse doesn't stack.",
			fr: "Si vous avez Posipi en jeu, chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là. L'effet d'Impulsion Partenaire n'est pas cumulable.",
			es: "Si tienes a Plusle en juego, cada vez que tu rival una 1 carta de Energía de su mano a uno de sus Pokémon, pon 2 contadores de daño en ese Pokémon. El efecto de Pulso Amigo no se acumula.",
			it: "Se hai in gioco Plusle, ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon. L'effetto di Impulso Amico non è cumulabile.",
			pt: "Se você tiver Plusle em jogo, sempre que seu oponente ligar uma carta de Energia da mão dele a 1 dos Pokémon dele, coloque 2 contadores de dano naquele Pokémon. O efeito de Pulso Amigo não acumula.",
			de: "Wenn du Plusle im Spiel hast, lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon. Der Effekt von Kumpelpuls stapelt sich nicht."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Speed Ball",
			fr: "Balle Rapide",
			es: "Bola Rápida",
			it: "Velocipalla",
			pt: "Bola Veloz",
			de: "Geschwindigkeitsball"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Narumi Sato"
}

export default card