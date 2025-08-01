import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spacing Out",
			fr: "Trou d'Mémoire",
			es: "En las Nubes",
			it: "Vuoto Mentale",
			pt: "Sonhando Acordado",
			de: "Dahindöser"
		},

		effect: {
			en: "Flip a coin. If heads, heal 10 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, soignez 10 dégâts de ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, cura 10 puntos de daño a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, cura questo Pokémon da 10 danni.",
			pt: "Jogue 1 moeda. Se sair cara, cure 10 pontos de dano deste Pokémon.",
			de: "Wirf 1 Münze. Heile bei Kopf 10 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658533
	}
}

export default card