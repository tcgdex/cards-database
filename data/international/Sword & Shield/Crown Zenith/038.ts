import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon V",
		'fr-fr': "Givrali V",
		'es-es': "Glaceon V",
		'it-it': "Glaceon V",
		'pt-br': "Glaceon V",
		'de-de': "Glaziola V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Frost Charge",
			'fr-fr': "Charge Givrée",
			'es-es': "Carga Helada",
			'it-it': "Gelocarica",
			'pt-br': "Carga de Gelo",
			'de-de': "Frostladung"
		},

		effect: {
			'en-us': "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie Water, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia Water no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Freezing Wind",
			'fr-fr': "Vent Glaçant",
			'es-es': "Viento Gélido",
			'it-it': "Ventogelido",
			'pt-br': "Vento Gelado",
			'de-de': "Polarwind"
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691755,
				tcgplayer: 478138
			}
		},
	],
}

export default card
