import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko V",
		fr: "Morpeko V",
		es: "Morpeko V",
		it: "Morpeko V",
		pt: "Morpeko V",
		de: "Morpeko V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gnaw and Run",
			fr: "Ronger et Courir",
			es: "Roer y Correr",
			it: "Rosicchia e Fuggi",
			pt: "Roer e Correr",
			de: "Annagen und Abhauen"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Hangry Spike",
			fr: "Smash Affamé",
			es: "Ascenso Voraz",
			it: "Punta Panciavuota",
			pt: "Espinho Voraz",
			de: "Extremer Kohldampf"
		},

		effect: {
			en: "If you played Marnie's Pride from your hand during this turn, this attack does 120 more damage.",
			fr: "Si vous avez joué Fierté de Rosemary de votre main pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si has jugado 1 carta de Orgullo de Roxy de tu mano durante este turno, este ataque hace 120 puntos de daño más.",
			it: "Se hai giocato Orgoglio di Mary dalla tua mano durante questo turno, questo attacco infligge 120 danni in più.",
			pt: "Se você jogou Orgulho da Marine da sua mão durante este turno, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn du Marys Stolz während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
