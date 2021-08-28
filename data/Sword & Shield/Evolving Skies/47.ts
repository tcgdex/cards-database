import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Eiscue",
		fr: "Bekaglaçon",
		es: "Eiscue",
		it: "Eiscue",
		pt: "Eiscue",
		de: "Kubuin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			it: "Geloneve",
			pt: "Icy Snow",
			de: "Eisiger Schnee"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			en: "Blockface",
			fr: "Tête de Bloc",
			es: "Carabloque",
			it: "Cubofaccia",
			pt: "Blockface",
			de: "Blockkopf"
		},

		effect: {
			en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card