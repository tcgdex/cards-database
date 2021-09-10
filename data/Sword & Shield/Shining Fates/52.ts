import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Évoli",
		en: "Eevee",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Signes d’Évolution",
			en: "Signs of Evolution",
			es: "Indicios de Evolución",
			it: "Evolvisegni",
			pt: "Sinais de Evolução",
			de: "Spuren der Evolution"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Évolution d’Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta que evolucione de Eevee, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta che si evolve da Eevee, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta no seu baralho que evolua de Eevee, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus Evoli entwickelt, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coup Déchaîné",
			en: "Wild Kick",
			es: "Patada Salvaje",
			it: "Calcio Selvaggio",
			pt: "Chute sem Pontaria",
			de: "Stürmischer Kick"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has the ability to alter the composition of its body to suit its surrounding environment."
	}
}

export default card