import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		'es-mx': "Shaymin",
		de: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin"
	},

	illustrator: "saino misaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Send Flowers",
			fr: "Envoi de Fleurs",
			es: "Enviar Flores",
			'es-mx': "Enviar Flores",
			de: "Blumen schicken",
			it: "Mandafiori",
			pt: "Mandar Flores"
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to 1 of your Benched {G} Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon {G} de Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía y únela a uno de tus Pokémon {G} en Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía y únela a 1 de tus Pokémon {G} en Banca. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 {G}-Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei Pokémon {G} nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Procure por uma carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon {G} no Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			'es-mx': "Paso de Hoja",
			de: "Blattschritt",
			it: "Passofoglia",
			pt: "Passo de Folha"
		},

		damage: 30
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684399,
		cardmarket: 877415
	}
}

export default card
