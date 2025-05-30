import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Pupitar",
		fr: "Ymphect de la Team Rocket",
		de: "Team Rockets Pupitar",
		it: "Pupitar del Team Rocket",
		es: "Pupitar del Team Rocket",
		pt: "Pupitar da Equipe Rocket",
		'es-mx': "Pupitar del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Explosive Ascension",
			fr: "Ascension Explosive",
			de: "Explosiver Aufstieg",
			it: "Ascensione Esplosiva",
			es: "Ascensión Explosiva",
			pt: "Ascensão Explosiva",
			'es-mx': "Ascensión Explosiva"
		},

		effect: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card