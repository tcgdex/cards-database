import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [760],
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Power Charger",
			fr: "Charge Puissance",
			es: "Cargador de Poder",
			it: "Caricatore Potenza",
			pt: "Carregador de Poder",
			de: "Energie tanken"
		},

		effect: {
			en: "Search your deck for a Basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Takeshi Nakamura"
}

export default card
