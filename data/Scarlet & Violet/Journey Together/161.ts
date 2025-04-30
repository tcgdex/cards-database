import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		de: "Arktos",
		it: "Articuno",
		pt: "Articuno",
		'es-mx': "Articuno"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Frigid Fluttering",
			fr: "Volettement Glacial",
			es: "Aleteo Glacial",
			de: "Frostiges Flattern",
			it: "Ali Glaciali",
			pt: "Asas Álgidas",
			'es-mx': "Aleteo Glacial"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Water Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie Water de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Water Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Water-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base Water e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Water Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Water Básica y únelas a este Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Ice Blast",
			fr: "Explosion Glacée",
			es: "Ráfaga de Hielo",
			de: "Eis-Blaster",
			it: "Ghiaccioscoppio",
			pt: "Rajada de Gelo",
			'es-mx': "Explosión Gélida"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
