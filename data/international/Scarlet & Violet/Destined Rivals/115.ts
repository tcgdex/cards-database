import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [30],
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidorina",
		'fr-fr': "Nidorina de la Team Rocket",
		'de-de': "Team Rockets Nidorina",
		'it-it': "Nidorina del Team Rocket",
		'es-es': "Nidorina del Team Rocket",
		'pt-br': "Nidorina da Equipe Rocket",
		'es-mx': "Nidorina del Equipo Rocket"
	},


	illustrator: "Taiga Kasai",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Team Rocket's Nidoran♀",
		'fr-fr': "Nidoran♀ de la Team Rocket",
		'de-de': "Team Rockets Nidoran♀",
		'it-it': "Nidoran♀ del Team Rocket",
		'es-es': "Nidoran♀ del Team Rocket",
		'pt-br': "Nidoran♀ da Equipe Rocket",
		'es-mx': "Nidoran♀ del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dark Awakening",
			'fr-fr': "Éveil Obscur",
			'de-de': "Dunkles Erwachen",
			'it-it': "Risveglio Oscuro",
			'es-es': "Despertar Oscuro",
			'pt-br': "Despertar Maligno",
			'es-mx': "Despertar Oscuro"
		},

		effect: {
			'en-us': "Choose up to 2 of your {D} Pokémon. For each of those Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Choisissez jusqu'à 2 de vos Pokémon {D}. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Wähle bis zu 2 deiner {D}-Pokémon. Durchsuche für jedes jener Pokémon dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Scegli fino a due dei tuoi Pokémon {D}. Per ognuno di essi, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Elige hasta 2 de tus Pokémon {D}. Para cada uno de esos Pokémon, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'pt-br': "Escolha até 2 dos seus Pokémon {D}. Para cada um daqueles Pokémon, procure por uma carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Elige hasta 2 de tus Pokémon {D}. Por cada uno de esos Pokémon, busca en tu mazo 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825989,
				tcgplayer: 632923
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825989,
				tcgplayer: 632923
			}
		},
	],
}

export default card
