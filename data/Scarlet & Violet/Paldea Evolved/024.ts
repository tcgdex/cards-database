import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Virevorreur",
		en: "Brambleghast",
		es: "Brambleghast",
		it: "Brambleghast",
		pt: "Brambleghast",
		de: "Horrerba"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Absorption",
			en: "Absorb Life",
			es: "Absorber Vida",
			it: "Spolpavita",
			pt: "Drenagem de Vida",
			de: "Lebensverkoster"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Cage de Bois Mort",
			en: "Dead Wood Detention",
			es: "Prisión Madera Seca",
			it: "Prigione di Sterpi",
			pt: "Prisão de Madeira Morta",
			de: "Trockenholzgitter"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, les attaques que le Pokémon Défenseur utilise coûtent ColorlessColorless de plus.",
			en: "During your opponent's next turn, attacks that the Defending Pokémon uses cost ColorlessColorless more.",
			es: "Durante el próximo turno de tu rival, los ataques que use el Pokémon Defensor cuestan ColorlessColorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi che usa il Pokémon difensore aumenta di ColorlessColorless.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão ColorlessColorless a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken, die das Verteidigende Pokémon einsetzt, um ColorlessColorless."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card