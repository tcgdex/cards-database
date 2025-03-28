import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar ex",
		fr: "Motorizard-ex",
		es: "Cyclizar ex",
		it: "Cyclizar-ex",
		pt: "Cyclizar ex",
		de: "Mopex-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Power Run",
			fr: "À Toute Puissance",
			es: "Carrera Enérgica",
			it: "Energicorsa",
			pt: "Corrida Poderosa",
			de: "Power-Raser"
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
			en: "Full Throttle",
			fr: "Pleins Gaz",
			es: "Aceleración Total",
			it: "A Tavoletta",
			pt: "Potência Máxima",
			de: "Vollgas"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card