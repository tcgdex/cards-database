import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yuu Nishida",
	category: "Pokemon",

	description: {
		'en-us': "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	stage: "Basic",

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	rarity: "Promo",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Signs of Evolution",
			'fr-fr': "Signes d'Évolution",
			'de-de': "Spuren der Evolution",
			'es-es': "Indicios de Evolución",
			'pt-br': "Sinais de Evolução",
			'it-it': "Evolvisegni"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution d'Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus Evoli entwickelt, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de Eevee, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta no seu baralho que evolua de Eevee, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da Eevee, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wild Kick",
			'fr-fr': "Coup Déchaîné",
			'de-de': "Stürmischer Kick",
			'es-es': "Patada Salvaje",
			'pt-br': "Chute sem Pontaria",
			'it-it': "Calcio Selvaggio"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 491204
	}
}

export default card
