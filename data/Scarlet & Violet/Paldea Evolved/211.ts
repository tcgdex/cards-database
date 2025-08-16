import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		fr: "Raichu",
		en: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Électrocharge",
			en: "Electrocharge",
			es: "Electrocarga",
			it: "Carica Voltaica",
			pt: "Eletrocarga",
			de: "Elektroladung"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Basic {L} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {L} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {L} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {L} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{L}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Tonnerre",
			en: "Thunderbolt",
			es: "Rayo",
			it: "Fulmine",
			pt: "Relâmpago",
			de: "Donnerblitz"
		},

		effect: {
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			en: "Discard all Energy from this Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Toshinao Aoki",

	thirdParty: {
		cardmarket: 715539
	}
}

export default card