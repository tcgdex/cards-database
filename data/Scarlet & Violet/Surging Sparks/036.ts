import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		en: "Ceruledge ex",
		fr: "Malvalame-ex",
		es: "Ceruledge ex",
		it: "Ceruledge-ex",
		pt: "Ceruledge ex",
		de: "Azugladis-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	evolveFrom: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Abyssal Flames",
			fr: "Flammes Abyssales",
			es: "Llamas Abismales",
			it: "Fiamme Abissali",
			pt: "Chamas Abissais",
			de: "Flammen des Abgrunds"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy card in your discard pile.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie dans votre pile de défausse.",
			es: "Este ataque hace 20 puntos de daño más por cada carta de Energía en tu pila de descartes.",
			it: "Questo attacco infligge 20 danni in più per ogni carta Energia nella tua pila degli scarti.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada carta de Energia na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			en: "Raging Amethyst",
			fr: "Améthyste Enragée",
			es: "Amatista Iracunda",
			it: "Furia di Ametista",
			pt: "Ametista Feroz",
			de: "Furioser Amethyst"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 280
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 794302
	}
}

export default card
