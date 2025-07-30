import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jolting Charge",
			fr: "Recharge Statique",
			es: "Jolgorio de Voltios",
			it: "Scossacarica",
			pt: "Carga Eletrizante",
			de: "Wattladung"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {G} Energy cards and up to 2 Basic {L} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {G} de base et jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {G} Básica y hasta 2 cartas de Energía {L} Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {G} e fino a due carte Energia base {L} e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {G} Básica e até 2 cartas de Energia {L} Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{G}-Energiekarten und bis zu 2 Basis-{L}-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Nisota Niso",

	thirdParty: {
		cardmarket: 785904
	}
}

export default card
