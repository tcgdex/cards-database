import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		de: "Furnifraß",
		it: "Heatmor",
		pt: "Heatmor",
		es: "Heatmor",
		'es-mx': "Heatmor"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Licking Catch",
			fr: "Prise Léchante",
			de: "Züngelnder Fang",
			it: "Leccattura",
			pt: "Lambida Pegajosa",
			es: "Captura Lengüetazo",
			'es-mx': "Captura Lingual"
		},

		effect: {
			en: "Search your deck for up to 3 in any combination of {R} Pokémon and Basic {R} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une combinaison d'un maximum de 3 Pokémon {R} et cartes Énergie {R} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 3 {R}-Pokémon und Basis-{R}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon {R} e carte Energia base {R} in qualsiasi combinazione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Pokémon {R} e de Energia {R} Básica no seu baralho em qualquer combinação, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja, en cualquier combinación, hasta 3 cartas de Pokémon {R} y de Energía {R} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo, en cualquier combinación, hasta 3 cartas de Pokémon {R} y de Energía {R} Básica, muéstralas y ponlas en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			pt: "Garras de Fogo",
			es: "Garras de Fuego",
			'es-mx': "Garras de Fuego"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835937
	}
}

export default card