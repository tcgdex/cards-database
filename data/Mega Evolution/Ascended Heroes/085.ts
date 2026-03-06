import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		'es-mx': "Misdreavus",
		de: "Traunfugil",
		it: "Misdreavus",
		pt: "Misdreavus"
	},

	illustrator: "Kazuhisa Uragami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [200],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Ascension",
			fr: "Ascension",
			es: "Ascensión",
			'es-mx': "Ascensión",
			de: "Aufstieg",
			it: "Ascensione",
			pt: "Ascensão"
		},

		effect: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e mettila sopra questo Pokémon per farlo evolvere. Poi rimischia il tuo mazzo.",
			pt: "Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675897,
		cardmarket: 869696
	}
}

export default card