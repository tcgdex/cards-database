import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1024],
	set: Set,

	name: {
		en: "Terapagos",
		fr: "Terapagos",
		es: "Terapagos",
		it: "Terapagos",
		pt: "Terapagos",
		de: "Terapagos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Prism Charge",
			fr: "Charge Prisme",
			es: "Carga Prisma",
			it: "Carica Prisma",
			pt: "Carga Prisma",
			de: "Prismaladung"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Energy cards of different types and attach them to your Tera Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base de types différents, puis attachez-les à vos Pokémon Téracristal comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon Teracristal de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso e assegnale ai tuoi Pokémon Teracristal nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia Básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon Tera como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Terakristall-Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hard Tackle",
			fr: "Tacle Violent",
			es: "Bloqueo Contundente",
			it: "Azione Dura",
			pt: "Investida Resistente",
			de: "Harter Tackle"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "GIDORA"
}

export default card
