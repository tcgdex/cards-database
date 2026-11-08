import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [413],
	set: Set,

	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'pt-br': "Wormadam",
		'de-de': "Burmadame"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Matron's Anger",
			'fr-fr': "Dame Colérique",
			'es-es': "Enfado de Dama",
			'it-it': "Ira della Dama",
			'pt-br': "Fúria Matriarcal",
			'de-de': "Zorn der Dame"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each Pokémon in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada Pokémon en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Scrap Drop",
			'fr-fr': "Largage",
			'es-es': "Caída de Chatarra",
			'it-it': "Caduta Scarti",
			'pt-br': "Despejo de Sucata",
			'de-de': "Schrottentsorgung"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608644,
				tcgplayer: 263817
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608644,
				tcgplayer: 263817
			}
		},
	],
}

export default card
