import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [972],
	set: Set,

	name: {
		en: "Houndstone",
		fr: "Tomberro",
		es: "Houndstone",
		it: "Houndstone",
		pt: "Houndstone",
		de: "Friedwuff"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Greavard"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Last Respects",
			fr: "Hommage Posthume",
			es: "Homenaje Póstumo",
			it: "Omaggio ai KO",
			pt: "Último Adeus",
			de: "Letzte Ehre"
		},

		effect: {
			en: "This attack does 10 more damage for each {P} Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon {P} dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon {P} en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon {P} nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon {P} na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
        cardmarket: 702402,
        tcgplayer: 487983
    }
}

export default card