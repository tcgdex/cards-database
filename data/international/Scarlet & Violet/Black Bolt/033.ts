import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'de-de': "Voltolos",
		'it-it': "Thundurus",
		'pt-br': "Thundurus",
		'es-es': "Thundurus",
		'es-mx': "Thundurus"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
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
			'pt-br': "Carga",
			'es-es': "Carga",
			'es-mx': "Carga"
		},

		effect: {
			'en-us': "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Disaster Volt",
			'fr-fr': "Éclair Désastre",
			'de-de': "Stromschwall",
			'it-it': "Elettrodisastro",
			'pt-br': "Voltagem do Desastre",
			'es-es': "Voltio Catastrófico",
			'es-mx': "Voltio Catastrófico"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835970,
				tcgplayer: 642485
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835970,
				tcgplayer: 642485
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836339,
				tcgplayer: 642730
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836340,
				tcgplayer: 642657
			}
		}
	]
}

export default card
