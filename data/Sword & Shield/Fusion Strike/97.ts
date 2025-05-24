import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Upper Shock",
			fr: "Choc Supérieur",
			de: "Entwicklungsschock",
			es: "Sacudida Superior",
			pt: "Choque Superior",
			it: "Vantaggioshock"
		},

		damage: 40,

		effect: {
			en: "If this Pokémon evolved from Eelektrik during this turn, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si ce Pokémon a évolué de Lampéroie pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Zapplalek entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Si este Pokémon ha evolucionado de Eelektrik durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Se este Pokémon evoluiu de Eelektrik durante este turno, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Se questo Pokémon si è evoluto da Eelektrik durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
			de: "Stromstoß",
			es: "Voltio Cruel",
			pt: "Ataque Selvagem",
			it: "Sprizzalampo"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card