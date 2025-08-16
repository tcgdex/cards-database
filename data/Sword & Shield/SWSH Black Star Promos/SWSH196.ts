import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		fr: "Givrali V",
		de: "Glaziola V",
		es: "Glaceon V",
		pt: "Glaceon V",
		it: "Glaceon V",
		en: "Glaceon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Charge Givrée",
			de: "Frostladung",
			es: "Carga Helada",
			pt: "Carga de Gelo",
			it: "Gelocarica",
			en: "Frost Charge"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie {W}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {W}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {W} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia {W} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia {W} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a {W} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Vent Glaçant",
			de: "Polarwind",
			es: "Viento Gélido",
			pt: "Vento Gelado",
			it: "Ventogelido",
			en: "Freezing Wind"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 604998
	}
}

export default card