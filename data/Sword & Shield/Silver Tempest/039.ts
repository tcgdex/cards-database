import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ascension",
			fr: "Ascension",
			es: "Ascensión",
			it: "Ascensione",
			pt: "Ascensão",
			de: "Aufstieg"
		},

		effect: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Splash",
			fr: "Trempette",
			es: "Salpicadura",
			it: "Splash",
			pt: "Borrifada",
			de: "Platscher"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card