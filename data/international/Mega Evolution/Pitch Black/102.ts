import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Morpeko ex",
		'fr-fr': "Morpeko-ex",
		'es-es': "Morpeko ex",
		'es-mx': "Morpeko ex",
		'de-de': "Morpeko-ex",
		'it-it': "Morpeko-ex",
		'pt-br': "Morpeko ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [877],
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Wheely Draw",
			'fr-fr': "Pioche Roulette",
			'es-es': "Robo Redondo",
			'es-mx': "Robo Redondo",
			'de-de': "Am Rad drehen",
			'it-it': "Ruotapesca",
			'pt-br': "Comprando e Rodando"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas."
		}
	}, {
		name: {
			'en-us': "Hangry Blaster",
			'fr-fr': "Explosion Affamée",
			'es-es': "Explosión Voraz",
			'es-mx': "Detonador Voraz",
			'de-de': "Kohldampfbombe",
			'it-it': "Esplosione Panciavuota",
			'pt-br': "Detonador Voraz"
		},

		cost: ["Darkness", "Darkness"],

		damage: "40+",

		effect: {
			'en-us': "This attack does 40 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada contador de daño en este Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada contador de dano neste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895887,
				tcgplayer: 704859
			}
		},
	],
}

export default card
