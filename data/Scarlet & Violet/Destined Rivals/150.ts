import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		de: "Staraptor",
		it: "Staraptor",
		es: "Staraptor",
		pt: "Staraptor"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tailspin Away",
			fr: "Départ en Vrille",
			de: "Entfliegen",
			it: "Avvitamento Evasivo",
			es: "Caída en Picado",
			pt: "Escapada Parafuso"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos."
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
			de: "Powerschuss",
			it: "Forzacolpo",
			es: "Estallido Vigoroso",
			pt: "Explosão Poderosa"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card