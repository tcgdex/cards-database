import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [696],

	name: {
		'en-us': "Tyrunt",
		'fr-fr': "Ptyranidur",
		'es-es': "Tyrunt",
		'es-mx': "Tyrunt",
		'de-de': "Balgoras",
		'it-it': "Tyrunt",
		'pt-br': "Tyrunt"
	},

	evolveFrom: {
		'en-us': "Antique Jaw Fossil",
		'fr-fr': "Fossile Mâchoire Ancien",
		'es-es': "Fósil Mandíbula Antiguo",
		'es-mx': "Fósil Mandíbula Antiguo",
		'de-de': "Antikes Kieferfossil",
		'it-it': "Vecchio Fossilmascella",
		'pt-br': "Fóssil de Mandíbula Arcaico",
	},

	illustrator: "Tomomi Kaneko",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Get Angry",
			'fr-fr': "Coléreux",
			'es-es': "Enfadarse",
			'es-mx': "Enojarse",
			'de-de': "Rotsehen",
			'it-it': "Tutte le Furie",
			'pt-br': "Dar Piti"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684358,
				cardmarket: 877458
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684358,
				cardmarket: 877458
			}
		}
	],

}

export default card
