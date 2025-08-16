import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		pt: "Meowth de Galar",
		de: "Galar-Mauzi"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "After many battles, it evolved dangerous claws that come together to form daggers when extended."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Call to Muster",
			fr: "Appel au Rassemblement",
			de: "Einberufen",
			es: "Llamar a Filas",
			pt: "Chamado de Guerra",
			it: "Chiamata a Raccolta"
		},

		effect: {
			en: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
			de: "Headbangen",
			es: "Cabecear",
			pt: "Baque de Cabeça",
			it: "Scuotitesta"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582809,
		tcgplayer: 253328
	}
}

export default card