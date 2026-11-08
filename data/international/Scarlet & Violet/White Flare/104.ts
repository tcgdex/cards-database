import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'de-de': "Furnifraß",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'es-es': "Heatmor",
		'es-mx': "Heatmor"
	},

	illustrator: "Kariya",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Licking Catch",
			'fr-fr': "Prise Léchante",
			'de-de': "Züngelnder Fang",
			'it-it': "Leccattura",
			'pt-br': "Lambida Pegajosa",
			'es-es': "Captura Lengüetazo",
			'es-mx': "Captura Lingual"
		},

		effect: {
			'en-us': "Search your deck for up to 3 in any combination of {R} Pokémon and Basic {R} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une combinaison d'un maximum de 3 Pokémon {R} et cartes Énergie {R} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 3 {R}-Pokémon und Basis-{R}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon {R} e carte Energia base {R} in qualsiasi combinazione, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Pokémon {R} e de Energia {R} Básica no seu baralho em qualquer combinação, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja, en cualquier combinación, hasta 3 cartas de Pokémon {R} y de Energía {R} Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo, en cualquier combinación, hasta 3 cartas de Pokémon {R} y de Energía {R} Básica, muéstralas y ponlas en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'de-de': "Feuerkrallen",
			'it-it': "Artigli Infuocati",
			'pt-br': "Garras de Fogo",
			'es-es': "Garras de Fuego",
			'es-mx': "Garras de Fuego"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836103,
				tcgplayer: 642216
			}
		},
	],
}

export default card
