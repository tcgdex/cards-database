import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		pt: "Eevee",
		de: "Evoli",
		it: "Eevee"
	},

	illustrator: "You Iribi",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution",
			es: "Indicios de Evolución",
			pt: "Sinais de Evolução",
			de: "Spuren der Evolution",
			it: "Evolvisegni"
		},

		effect: {
			en: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution d'Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta que evolucione de Eevee, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta no seu baralho que evolua de Eevee, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus Evoli entwickelt, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta che si evolve da Eevee, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
			es: "Patada Salvaje",
			pt: "Chute sem Pontaria",
			de: "Stürmischer Kick",
			it: "Calcio Selvaggio"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	stage: "Basic",
	dexId: [133],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
