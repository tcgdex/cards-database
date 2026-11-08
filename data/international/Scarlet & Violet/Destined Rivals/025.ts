import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		'en-us': "Rabsca ex",
		'fr-fr': "Bérasca-ex",
		'de-de': "Skarabaks-ex",
		'it-it': "Rabsca-ex",
		'es-es': "Rabsca ex",
		'pt-br': "Rabsca ex",
		'es-mx': "Rabsca ex"
	},

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'de-de': "Relluk",
		'it-it': "Rellor",
		'es-es': "Rellor",
		'pt-br': "Rellor",
		'es-mx': "Rellor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Upside-Down Draw",
			'fr-fr': "Pioche Inversée",
			'de-de': "Kopfüber-Zug",
			'it-it': "Pesca Sottosopra",
			'es-es': "Robo al Revés",
			'pt-br': "Compra às Avessas",
			'es-mx': "Robo al Revés"
		},

		effect: {
			'en-us': "Draw 3 cards from the bottom of your deck.",
			'fr-fr': "Piochez 3 cartes du dessous de votre deck.",
			'de-de': "Ziehe die 3 untersten Karten deines Decks.",
			'it-it': "Pesca tre carte dal fondo del tuo mazzo.",
			'es-es': "Roba las 3 cartas de la parte inferior de tu baraja.",
			'pt-br': "Compre as 3 cartas de baixo do seu baralho.",
			'es-mx': "Roba las 3 cartas de la parte inferior de tu mazo."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'es-es': "Psíquico",
			'pt-br': "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			'en-us': "This attack does 90 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 90 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 90 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 90 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 90 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 90 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 90 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825899,
				tcgplayer: 632848
			}
		},
	],
}

export default card
