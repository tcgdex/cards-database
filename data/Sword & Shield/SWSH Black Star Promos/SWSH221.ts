import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [155],
	set: Set,

	name: {
		fr: "Héricendre",
		de: "Feurigel",
		es: "Cyndaquil",
		pt: "Cyndaquil",
		it: "Cyndaquil",
		en: "Cyndaquil"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Recharge Énergétique",
			de: "Energielader",
			es: "Cargar Energía",
			pt: "Carga de Energia",
			it: "Caricaenergia",
			en: "Charge Energy"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Charbon Mutant",
			de: "Glühende Kohlen",
			es: "Carbón Activado",
			pt: "Carvão Vivo",
			it: "Carboni Ardenti",
			en: "Live Coal"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower."
	}
}

export default card