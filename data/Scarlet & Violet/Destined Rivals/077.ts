import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		de: "Rotom",
		it: "Rotom",
		es: "Rotom",
		pt: "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Astonish",
			fr: "Étonnement",
			de: "Erstauner",
			it: "Sgomento",
			es: "Impresionar",
			pt: "Abismar"
		},

		effect: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			pt: "Escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no baralho dele."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gadget Show",
			fr: "Démonstration de Gadgets",
			de: "Gadget-Show",
			it: "Mostra di Gadget",
			es: "Espectáculo de Utensilios",
			pt: "Show de Bugigangas"
		},

		effect: {
			en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card