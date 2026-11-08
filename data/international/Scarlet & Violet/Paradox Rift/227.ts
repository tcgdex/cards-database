import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity ex",
		'fr-fr': "Salarsen-ex",
		'es-es': "Toxtricity ex",
		'it-it': "Toxtricity-ex",
		'pt-br': "Toxtricity ex",
		'de-de': "Riffex-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Knocking Hammer",
			'fr-fr': "Marteau Frappeur",
			'es-es': "Martillo Impacto",
			'it-it': "Martello Battente",
			'pt-br': "Martelo Detonador",
			'de-de': "Klopfender Hammer"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 70
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Gaia Punk",
			'fr-fr': "Punk de Gaïa",
			'es-es': "Gaia Punki",
			'it-it': "Gaiapunk",
			'pt-br': "Gaia Punk",
			'de-de': "Gaia-Punk"
		},

		effect: {
			'en-us': "Discard 3 {L} Energy from your Pokémon.",
			'fr-fr': "Défaussez 3 Énergies {L} de vos Pokémon.",
			'es-es': "Descarta 3 Energías {L} de tus Pokémon.",
			'it-it': "Scarta tre Energie {L} dai tuoi Pokémon.",
			'pt-br': "Descarte 3 Energias {L} dos seus Pokémon.",
			'de-de': "Lege 3 {L}-Energien von deinen Pokémon auf deinen Ablagestapel."
		},

		damage: 270
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740770,
				tcgplayer: 523908,
				cardtrader: 265349
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
