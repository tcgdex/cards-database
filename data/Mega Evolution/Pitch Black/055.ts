import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko ex",
		fr: "Morpeko-ex",
		es: "Morpeko ex",
		'es-mx': "Morpeko ex",
		de: "Morpeko-ex",
		it: "Morpeko-ex",
		pt: "Morpeko ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [877],
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Wheely Draw",
			fr: "Pioche Roulette",
			es: "Robo Redondo",
			'es-mx': "Robo Redondo",
			de: "Am Rad drehen",
			it: "Ruotapesca",
			pt: "Comprando e Rodando"
		},

		cost: ["Darkness"],

		effect: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas."
		}
	}, {
		name: {
			en: "Hangry Blaster",
			fr: "Explosion Affamée",
			es: "Explosión Voraz",
			'es-mx': "Detonador Voraz",
			de: "Kohldampfbombe",
			it: "Esplosione Panciavuota",
			pt: "Detonador Voraz"
		},

		cost: ["Darkness", "Darkness"],

		damage: "40+",

		effect: {
			en: "This attack does 40 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada contador de dano neste Pokémon."
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
				cardmarket: 895840,
				tcgplayer: 704812
			}
		},
	],
}

export default card
