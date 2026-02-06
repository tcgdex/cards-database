import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [714],

	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		'es-mx': "Noibat",
		de: "eF-eM",
		it: "Noibat",
		pt: "Noibat"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Knickknack Carrying",
			fr: "Trimballe Bricoles",
			es: "Transporte de Chatarra",
			'es-mx': "Transporte de Chatarra",
			de: "Klimbimtransport",
			it: "Trasporto di Cianfrusaglie",
			pt: "Carregando Tranqueira"
		},

		effect: {
			en: "Search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Outil Pokémon, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Herramienta Pokémon, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Herramienta Pokémon, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Pokémon-Ausrüstung, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Oggetto Pokémon, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por uma carta de Ferramenta Pokémon no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675968,
		cardmarket: 869767
	}
}

export default card