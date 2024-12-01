import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon",
		de: "Miraidon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peak Acceleration",
			fr: "Accélération Maximale",
			es: "Aceleración Máxima",
			it: "Accelerazione Massima",
			pt: "Aceleração Máxima",
			de: "Höchstbeschleunigung"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards and attach them to your Future Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon Temps futur comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon del futuro de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon Tempo Futuro nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon Futuristas como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon aus der Zukunft an. Mische anschließend dein Deck."
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning", "Psychic"],

		name: {
			en: "Sparking Strike",
			fr: "Frappe Étincelante",
			es: "Golpe Chispeante",
			it: "Colpo Scintilla",
			pt: "Golpe Cintilante",
			de: "Funkenschlag"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card