import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Terapagos",
		fr: "Terapagos",
		es: "Terapagos",
		'es-mx': "Terapagos",
		de: "Terapagos",
		it: "Terapagos",
		pt: "Terapagos"
	},

	illustrator: "GIDORA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [1024],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Prism Charge",
			fr: "Charge Prisme",
			es: "Carga Prisma",
			'es-mx': "Carga Prisma",
			de: "Prismaladung",
			it: "Carica Prisma",
			pt: "Carga Prisma"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Energy cards of different types and attach them to your Tera Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base de types différents, puis attachez-les à vos Pokémon Téracristal comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon Teracristal de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon Teracristal de la manera que quieras. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Terakristall-Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso e assegnale ai tuoi Pokémon Teracristal nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia Básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon Tera como desejar. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hard Tackle",
			fr: "Tacle Violent",
			es: "Bloqueo Contundente",
			'es-mx': "Tacleada Sólida",
			de: "Harter Tackle",
			it: "Azione Dura",
			pt: "Investida Resistente"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675990,
		cardmarket: 869789
	}
}

export default card