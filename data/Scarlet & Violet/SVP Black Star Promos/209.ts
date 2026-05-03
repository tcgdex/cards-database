import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris",
		de: "Voltolos",
		it: "Thundurus",
		es: "Thundurus",
		pt: "Thundurus"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [642],
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
			es: "Carga",
			pt: "Carga"
	},

		effect: {
			en: "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Disaster Volt",
			fr: "Éclair Désastre",
			de: "Stromschwall",
			it: "Elettrodisastro",
			es: "Voltio Catastrófico",
			pt: "Voltagem do Desastre"
	},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
	},

		damage: 110
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836655,
		tcgplayer: 644833
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	],
}

export default card