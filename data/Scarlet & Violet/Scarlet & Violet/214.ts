import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		es: "Greavard",
		it: "Greavard",
		pt: "Greavard",
		de: "Gruff"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Graveyard Gamboling",
			fr: "Cabriole Funèbre",
			es: "Jugueteo en el Cementerio",
			it: "Saltellacimitero",
			pt: "Cambalhotas no Cemitério",
			de: "Grufttollerei"
		},

		effect: {
			en: "This attack does 10 damage for each {P} Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque Pokémon {P} dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño por cada Pokémon {P} en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni per ogni Pokémon {P} nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano para cada Pokémon {P} na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte zu."
		},

		damage: "10×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "sowsow",

	thirdParty: {
        cardmarket: 702510,
        tcgplayer: 490073
    }
}

export default card