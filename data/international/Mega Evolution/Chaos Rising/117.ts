import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Mega Floette ex",
		'fr-fr': "Méga-Floette-ex",
		'es-es': "Mega-Floette ex",
		'es-mx': "Mega-Floette ex",
		'de-de': "Mega-Floette-ex",
		'it-it': "Mega Floette-ex",
		'pt-br': "Mega Floette ex"
	},

	illustrator: "Teeziro",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [670],
	hp: 250,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Gentle Light",
			'fr-fr': "Lumière Douce",
			'es-es': "Luz Gentil",
			'es-mx': "Luz Gentil",
			'de-de': "Sanftes Licht",
			'it-it': "Luce Gentile",
			'pt-br': "Luz Gentil"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Heal 30 damage from each Pokémon (both yours and your opponent's).",
			'fr-fr': "Soignez 30 dégâts de chacun des Pokémon (les vôtres et ceux de votre adversaire).",
			'es-es': "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
			'es-mx': "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
			'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon (deinen und denen deines Gegners).",
			'it-it': "Cura ogni Pokémon, sia tuo che del tuo avversario, da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada Pokémon (seus e do seu oponente)."
		}
	}, {
		name: {
			'en-us': "Eternity Bloom",
			'fr-fr': "Floraison de l'Éternité",
			'es-es': "Floración Eterna",
			'es-mx': "Floración Eterna",
			'de-de': "Blüte der Ewigkeit",
			'it-it': "Fioritura dell'Eternità",
			'pt-br': "Flor da Eternidade"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: 200,

		effect: {
			'en-us': "Search your deck for up to 4 Basic {P} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 4 cartes Énergie {P} de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 4 cartas de Energía {P} Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 4 cartas de Energía {P} Básica y únelas a tus Pokémon en Banca de la manera que quieras. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 4 Basis-{P}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a quattro carte Energia base {P} e assegnale ai Pokémon nella tua panchina nel modo che preferisci. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 4 cartas de Energia {P} Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886510,
				tcgplayer: 693513
			}
		},
	],
}

export default card
