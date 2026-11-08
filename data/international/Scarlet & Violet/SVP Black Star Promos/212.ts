import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'de-de': "Zytomega",
		'it-it': "Reuniclus",
		'es-es': "Reuniclus",
		'pt-br': "Reuniclus"
	},

	illustrator: "satoma",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [579],
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'de-de': "Mitodos",
		'it-it': "Duosion",
		'es-es': "Duosion",
		'pt-br': "Duosion"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cellular Ascension",
			'fr-fr': "Ascension Cellulaire",
			'de-de': "Zellenaufstieg",
			'it-it': "Ascensione Cellulare",
			'es-es': "Ascensión Celular",
			'pt-br': "Ascensão Celular"
	},

		effect: {
			'en-us': "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Per ogni Pokémon nella tua panchina, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Para cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'pt-br': "Para cada um dos seus Pokémon no Banco, procure por uma carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Evo-Lariat",
			'fr-fr': "Lasso Évo",
			'de-de': "Evo-Lasso",
			'it-it': "Evo-Lariat",
			'es-es': "Evo-Lazo",
			'pt-br': "Lariat Evolutivo"
	},

		effect: {
			'en-us': "This attack does 40 more damage for each of your Evolution Pokémon in play.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon Évolutifs en jeu.",
			'de-de': "Diese Attacke fügt für jedes deiner Entwicklungs-Pokémon im Spiel 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni tuo Pokémon Evoluzione in gioco.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon Evolución en juego.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon de Evolução em jogo."
	},

		damage: "40+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836658,
				tcgplayer: 647309
			},
		}
	],
}

export default card
