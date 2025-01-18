import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon ex",
		fr: "Pyroli-ex",
		es: "Flareon ex",
		pt: "Flareon ex",
		it: "Flareon-ex",
		de: "Flamara-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Burning Charge",
			fr: "Charge Brûlante",
			es: "Carga Abrasadora",
			pt: "Carga Ardente",
			it: "Bruciacarica",
			de: "Brennende Ladung"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
		},

		damage: 130
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			en: "Carnelian",
			fr: "Cornaline",
			es: "Cornalina",
			pt: "Cornalina",
			it: "Corniola",
			de: "Karneol"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 280
	}],

	retreat: 2,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card