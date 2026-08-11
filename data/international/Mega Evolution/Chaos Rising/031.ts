import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
	},


	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'es-mx': "Deoxys",
		'de-de': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Genome Charge",
			'fr-fr': "Charge Génome",
			'es-es': "Carga Genoma",
			'es-mx': "Carga Genoma",
			'de-de': "Genom-Aufladung",
			'it-it': "Carica del Genoma",
			'pt-br': "Carga Genética"
		},

		cost: ["Colorless"],

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
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'es-mx': "Fuerza Psíquica",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'pt-br': "Psíquico"
		},

		cost: ["Psychic", "Psychic", "Colorless"],
		damage: "80+",

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886423,
				tcgplayer: 693474
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886423,
				tcgplayer: 693474
			}
		},
	],
}

export default card
