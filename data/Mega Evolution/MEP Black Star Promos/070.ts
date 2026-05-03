import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		es: "Tyrunt",
		'es-mx': "Tyrunt",
		de: "Balgoras",
		it: "Tyrunt",
		pt: "Tyrunt"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [696],

	evolveFrom: {
		en: "Antique Jaw Fossil",
		fr: "Fossile Mâchoire Ancien",
		es: "Fósil Mandíbula Antiguo",
		'es-mx': "Fósil Mandíbula Antiguo",
		de: "Antikes Kieferfossil",
		it: "Vecchio Fossilmascella",
		pt: "Fóssil de Mandíbula Arcaico"
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Get Angry",
			fr: "Coléreux",
			es: "Enfadarse",
			'es-mx': "Enojarse",
			de: "Rotsehen",
			it: "Tutte le Furie",
			pt: "Dar Piti"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon."
		},

		damage: "20×"
	}],

	retreat: 3,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
