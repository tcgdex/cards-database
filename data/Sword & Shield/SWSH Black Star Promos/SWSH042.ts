import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "You Iribi",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Signs of Evolution",
			fr: "Signes d’Évolution",
			es: "Indicios de Evolución",
			pt: "Signs of Evolution",
			de: "Spuren der Evolution"
		},

		effect: {
			en: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution d’Évoli, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta que evolucione de Eevee, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus Evoli entwickelt, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
			es: "Patada Salvaje",
			pt: "Wild Kick",
			de: "Stürmischer Kick"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Flip a coin. If tails, this attack does nothing.",
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
	}
}

export default card