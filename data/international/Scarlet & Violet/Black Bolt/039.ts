import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'de-de': "Zytomega",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'es-es': "Reuniclus",
		'es-mx': "Reuniclus"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'de-de': "Mitodos",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'es-es': "Duosion",
		'es-mx': "Duosion"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cellular Ascension",
			'fr-fr': "Ascension Cellulaire",
			'de-de': "Zellenaufstieg",
			'it-it': "Ascensione Cellulare",
			'pt-br': "Ascensão Celular",
			'es-es': "Ascensión Celular",
			'es-mx': "Ascensión Celular"
		},

		effect: {
			'en-us': "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Per ogni Pokémon nella tua panchina, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada um dos seus Pokémon no Banco, procure por uma carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-es': "Para cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'es-mx': "Por cada uno de tus Pokémon en Banca, busca en tu mazo 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Evo-Lariat",
			'fr-fr': "Lasso Évo",
			'de-de': "Evo-Lasso",
			'it-it': "Evo-Lariat",
			'pt-br': "Lariat Evolutivo",
			'es-es': "Evo-Lazo",
			'es-mx': "Lazo Evolutivo"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each of your Evolution Pokémon in play.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon Évolutifs en jeu.",
			'de-de': "Diese Attacke fügt für jedes deiner Entwicklungs-Pokémon im Spiel 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni tuo Pokémon Evoluzione in gioco.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon de Evolução em jogo.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon Evolución en juego.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon Evolución en juego."
		},

		damage: "40+"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835985,
				tcgplayer: 642491
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835985,
				tcgplayer: 642491
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836355,
				tcgplayer: 642735
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836353,
				tcgplayer: 642662
			}
		}
	]
}

export default card
