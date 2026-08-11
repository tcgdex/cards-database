import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'fr-fr': "Givrali V",
		'de-de': "Glaziola V",
		'es-es': "Glaceon V",
		'pt-br': "Glaceon V",
		'it-it': "Glaceon V",
		'en-us': "Glaceon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Charge Givrée",
			'de-de': "Frostladung",
			'es-es': "Carga Helada",
			'pt-br': "Carga de Gelo",
			'it-it': "Gelocarica",
			'en-us': "Frost Charge"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie {W}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 {W}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {W} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia {W} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia {W} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a {W} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Vent Glaçant",
			'de-de': "Polarwind",
			'es-es': "Viento Gélido",
			'pt-br': "Vento Gelado",
			'it-it': "Ventogelido",
			'en-us': "Freezing Wind"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 606749
	}
}

export default card
