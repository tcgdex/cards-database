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

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

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
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			de: "Blattsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608434,
				tcgplayer: 263598
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608434,
				tcgplayer: 263598
			}
		},
	],
}

export default card
