import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Trou d'Mémoire",
			en: "Spacing Out",
			es: "En las Nubes",
			it: "Vuoto Mentale",
			pt: "Sonhando Acordado",
			de: "Dahindöser"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, soignez 30 dégâts de ce Pokémon.",
			en: "Flip a coin. If heads, heal 30 damage from this Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, cura 30 puntos de daño a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, cura questo Pokémon da 30 danni.",
			pt: "Jogue uma moeda. Se sair cara, cure 30 pontos de dano deste Pokémon.",
			de: "Wirf 1 Münze. Heile bei Kopf 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Flamboiement",
			en: "Flare",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "kantaro",

	thirdParty: {
		cardmarket: 715507
	}
}

export default card