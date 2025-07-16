import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Teal Mask Ogerpon",
		fr: "Ogerpon Masque Turquoise",
		de: "Türkisgrüne-Maske-Ogerpon",
		it: "Ogerpon Maschera Turchese",
		es: "Ogerpon Máscara Turquesa",
		pt: "Ogerpon Máscara Turquesa",
		'es-mx': "Ogerpon Máscara Turquesa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Grass Kagura",
			fr: "Kagura Plante",
			de: "Pflanzen-Kagura",
			it: "Kagura dell'Erba",
			es: "Kagura Planta",
			pt: "Kagura de Planta",
			'es-mx': "Kagura de Planta"
		},

		effect: {
			en: "Search your deck for a Basic {G} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {G} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{G}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {G} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {G} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {G} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {G} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Ogre's Hammer",
			fr: "Marteau de Monstre",
			de: "Onis Hammer",
			it: "Martello dell'Orco",
			es: "Martillo del Ogro",
			pt: "Martelo do Ogro",
			'es-mx': "Martillo del Ogro"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Ogre's Hammer.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Marteau de Monstre.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Onis Hammer nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Martello dell'Orco.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Martillo del Ogro.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Martelo do Ogro.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Martillo del Ogro."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
