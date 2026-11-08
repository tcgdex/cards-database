import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'es-mx': "Cresselia",
		'de-de': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [488],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Swelling Light",
			'fr-fr': "Lumière Grandissante",
			'es-es': "Luz Creciente",
			'es-mx': "Luz Rebosante",
			'de-de': "Wachsendes Licht",
			'it-it': "Luce Amplificata",
			'pt-br': "Claridade Crescente"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {P} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {P} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{P}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {P} e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {P} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'es-es': "Rayo Aurora",
			'es-mx': "Rayo Aurora",
			'de-de': "Aurorastrahl",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
	},

	illustrator: "Raita Kazama",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857614,
				tcgplayer: 662145,
				cardtrader: 356822
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857614,
				tcgplayer: 662145,
				cardtrader: 356822
			}
		},
	],
}

export default card
