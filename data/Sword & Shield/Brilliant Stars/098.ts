import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [413],
	set: Set,

	name: {
		en: "Wormadam",
		fr: "Cheniselle",
		es: "Wormadam",
		it: "Wormadam",
		pt: "Wormadam",
		de: "Burmadame"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
		es: "Burmy",
		it: "Burmy",
		pt: "Burmy",
		de: "Burmy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Matron's Anger",
			fr: "Dame Colérique",
			es: "Enfado de Dama",
			it: "Ira della Dama",
			pt: "Fúria Matriarcal",
			de: "Zorn der Dame"
		},

		effect: {
			en: "This attack does 10 more damage for each Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Scrap Drop",
			fr: "Largage",
			es: "Caída de Chatarra",
			it: "Caduta Scarti",
			pt: "Despejo de Sucata",
			de: "Schrottentsorgung"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card