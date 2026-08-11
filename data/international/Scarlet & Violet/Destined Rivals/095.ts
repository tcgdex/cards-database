import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'en-us': "Team Rocket's Pupitar",
		'fr-fr': "Ymphect de la Team Rocket",
		'de-de': "Team Rockets Pupitar",
		'it-it': "Pupitar del Team Rocket",
		'es-es': "Pupitar del Team Rocket",
		'pt-br': "Pupitar da Equipe Rocket",
		'es-mx': "Pupitar del Equipo Rocket"
	},


	illustrator: "Izucch",

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Team Rocket's Larvitar",
		'fr-fr': "Embrylex de la Team Rocket",
		'de-de': "Team Rockets Larvitar",
		'it-it': "Larvitar del Team Rocket",
		'es-es': "Larvitar del Team Rocket",
		'pt-br': "Larvitar da Equipe Rocket",
		'es-mx': "Larvitar del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Explosive Ascension",
			'fr-fr': "Ascension Explosive",
			'de-de': "Explosiver Aufstieg",
			'it-it': "Ascensione Esplosiva",
			'es-es': "Ascensión Explosiva",
			'pt-br': "Ascensão Explosiva",
			'es-mx': "Ascensión Explosiva"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825968,
				tcgplayer: 632904
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825968,
				tcgplayer: 632904
			}
		},
	],
}

export default card
