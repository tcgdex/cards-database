import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'de-de': "Voltolos",
		'it-it': "Thundurus",
		'es-es': "Thundurus",
		'pt-br': "Thundurus"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [642],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Charge",
			'fr-fr': "Chargeur",
			'de-de': "Ladevorgang",
			'it-it': "Sottocarica",
			'es-es': "Carga",
			'pt-br': "Carga"
	},

		effect: {
			'en-us': "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Disaster Volt",
			'fr-fr': "Éclair Désastre",
			'de-de': "Stromschwall",
			'it-it': "Elettrodisastro",
			'es-es': "Voltio Catastrófico",
			'pt-br': "Voltagem do Desastre"
	},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
	},

		damage: 110
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836655,
				tcgplayer: 644833
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 836665,
				tcgplayer: 644834
			},
		}
	],
}

export default card
