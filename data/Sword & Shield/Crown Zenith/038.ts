import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon V",
		fr: "Givrali V",
		es: "Glaceon V",
		it: "Glaceon V",
		pt: "Glaceon V",
		de: "Glaziola V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Frost Charge",
			fr: "Charge Givrée",
			es: "Carga Helada",
			it: "Gelocarica",
			pt: "Carga de Gelo",
			de: "Frostladung"
		},

		effect: {
			en: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Water, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia Water no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Freezing Wind",
			fr: "Vent Glaçant",
			es: "Viento Gélido",
			it: "Ventogelido",
			pt: "Vento Gelado",
			de: "Polarwind"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
