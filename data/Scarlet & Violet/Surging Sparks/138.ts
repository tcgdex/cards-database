import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		en: "Applin",
		fr: "Verpom",
		es: "Applin",
		it: "Applin",
		pt: "Applin",
		de: "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nutrients",
			fr: "Nutriments",
			es: "Nutrientes",
			it: "Nutrienti",
			pt: "Nutrientes",
			de: "Nährstoffe"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			en: "Trip Over",
			fr: "Croche-Pied",
			es: "Tropezón",
			it: "Inciampare",
			pt: "Tropeção",
			de: "Stolperer"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Yuka Morii",

	thirdParty: {
		cardmarket: 794511
	}
}

export default card
