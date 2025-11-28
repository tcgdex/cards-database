import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		'es-mx': "Charcadet",
		de: "Knarbon",
		it: "Charcadet",
		pt: "Charcadet"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [935],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [935],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Gather Strength",
			fr: "Pouvoir Collecté",
			es: "Reunir Fuerzas",
			'es-mx': "Reunir Fuerzas",
			de: "Kraftsammler",
			it: "Radunaforze",
			pt: "Reunir Força"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			es: "Cortar",
			'es-mx': "Golpe Tajante",
			de: "Hacker",
			it: "Ceffone",
			pt: "Trincar"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857594
	}
}

export default card