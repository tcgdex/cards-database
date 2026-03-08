import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [542],
	set: Set,

	name: {
		en: "Leavanny",
		fr: "Manternel",
		de: "Matrifol",
		it: "Leavanny",
		pt: "Leavanny",
		es: "Leavanny",
		'es-mx': "Leavanny"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		de: "Folikon",
		it: "Swadloon",
		pt: "Swadloon",
		es: "Swadloon",
		'es-mx': "Swadloon"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Healing Wrapping",
			fr: "Lange Apaisant",
			de: "Heilende Wickel",
			it: "Copertura Curativa",
			pt: "Bandagem Curativa",
			es: "Mantilla Curativa",
			'es-mx': "Mantita Sanadora"
		},

		effect: {
			en: "Heal 100 damage from each of your Basic Pokémon.",
			fr: "Soignez 100 dégâts de chacun de vos Pokémon de base.",
			de: "Heile 100 Schadenspunkte bei jedem deiner Basis-Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon Base da 100 danni.",
			pt: "Cure 100 pontos de dano de cada um dos seus Pokémon Básicos.",
			es: "Cura 100 puntos de daño a cada uno de tus Pokémon Básicos.",
			'es-mx': "Cura 100 puntos de daño a cada uno de tus Pokémon Básicos."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "X-Scissor",
			fr: "Plaie Croix",
			de: "Kreuzschere",
			it: "Forbice X",
			pt: "Tesoura X",
			es: "Tijera X",
			'es-mx': "Tijera X"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836074
	}
}

export default card