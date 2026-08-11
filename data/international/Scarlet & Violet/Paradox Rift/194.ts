import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		'en-us': "Minun",
		'fr-fr': "Négapi",
		'es-es': "Minun",
		'it-it': "Minun",
		'pt-br': "Minun",
		'de-de': "Minun"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Buddy Pulse",
			'fr-fr': "Impulsion Partenaire",
			'es-es': "Pulso Amigo",
			'it-it': "Impulso Amico",
			'pt-br': "Pulso Amigo",
			'de-de': "Kumpelpuls"
		},

		effect: {
			'en-us': "If you have Plusle in play, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon. The effect of Buddy Pulse doesn't stack.",
			'fr-fr': "Si vous avez Posipi en jeu, chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là. L'effet d'Impulsion Partenaire n'est pas cumulable.",
			'es-es': "Si tienes a Plusle en juego, cada vez que tu rival una 1 carta de Energía de su mano a uno de sus Pokémon, pon 2 contadores de daño en ese Pokémon. El efecto de Pulso Amigo no se acumula.",
			'it-it': "Se hai in gioco Plusle, ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon. L'effetto di Impulso Amico non è cumulabile.",
			'pt-br': "Se você tiver Plusle em jogo, sempre que seu oponente ligar uma carta de Energia da mão dele a 1 dos Pokémon dele, coloque 2 contadores de dano naquele Pokémon. O efeito de Pulso Amigo não acumula.",
			'de-de': "Wenn du Plusle im Spiel hast, lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon. Der Effekt von Kumpelpuls stapelt sich nicht."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Speed Ball",
			'fr-fr': "Balle Rapide",
			'es-es': "Bola Rápida",
			'it-it': "Velocipalla",
			'pt-br': "Bola Veloz",
			'de-de': "Geschwindigkeitsball"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740737,
				tcgplayer: 523875,
				cardtrader: 265375
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
