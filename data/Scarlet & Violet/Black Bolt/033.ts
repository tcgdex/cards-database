import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris",
		de: "Voltolos",
		it: "Thundurus",
		pt: "Thundurus",
		es: "Thundurus",
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
			en: "Charge",
			fr: "Chargeur",
			de: "Ladevorgang",
			it: "Sottocarica",
			pt: "Carga",
			es: "Carga",
			'es-mx': "Carga"
		},

		effect: {
			en: "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Disaster Volt",
			fr: "Éclair Désastre",
			de: "Stromschwall",
			it: "Elettrodisastro",
			pt: "Voltagem do Desastre",
			es: "Voltio Catastrófico",
			'es-mx': "Voltio Catastrófico"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835970
	}
}

export default card