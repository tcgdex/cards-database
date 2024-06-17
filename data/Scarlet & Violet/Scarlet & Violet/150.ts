import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [398],
	set: Set,

	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		pt: "Staraptor",
		de: "Staraptor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tailspin Away",
			fr: "Départ en Vrille",
			es: "Caída en Picado",
			it: "Avvitamento Evasivo",
			pt: "Escapada Parafuso",
			de: "Entfliegen"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
			es: "Estallido Vigoroso",
			it: "Forzacolpo",
			pt: "Explosão Poderosa",
			de: "Powerschuss"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card