import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'de-de': "Rotom",
		'it-it': "Rotom",
		'es-es': "Rotom",
		'pt-br': "Rotom",
		'es-mx': "Rotom"
	},


	illustrator: "Yoshimi Miyoshi",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Astonish",
			'fr-fr': "Étonnement",
			'de-de': "Erstauner",
			'it-it': "Sgomento",
			'es-es': "Impresionar",
			'pt-br': "Abismar",
			'es-mx': "Impresión"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'pt-br': "Escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no baralho dele.",
			'es-mx': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival muestra esa carta, la pone en su mazo y las baraja todas."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gadget Show",
			'fr-fr': "Démonstration de Gadgets",
			'de-de': "Gadget-Show",
			'it-it': "Mostra di Gadget",
			'es-es': "Espectáculo de Utensilios",
			'pt-br': "Show de Bugigangas",
			'es-mx': "Show de Artefactos"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825951,
				tcgplayer: 632887
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825951,
				tcgplayer: 632887
			}
		},
	],
}

export default card
