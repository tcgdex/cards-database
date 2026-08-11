import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
		'es-es': "Mew",
		'it-it': "Mew",
		'de-de': "Mew",
		'pt-br': "Mew",
		'ko-kr': "뮤"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [151],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
		'fr-fr': "Nombre de scientifiques voient en lui l'ancêtre des Pokémon\ncar il maîtrise toutes leurs capacités.",
		'es-es': "Varios científicos lo consideran el antecesor de los\nPokémon porque usa todo tipo de movimientos.",
		'it-it': "Poiché sa usare qualsiasi mossa,\nmolti scienziati ritengono che Mew\nsia l'antenato di tutti i Pokémon.",
		'de-de': "Es beherrscht alle möglichen Attacken, daher sieht\nman in ihm den Vorfahren aller Pokémon.",
		'pt-br': "Como pode usar todos os tipos de movimentos,\nmuitos cientistas acreditam que Mew seja\no ancestral dos Pokémon.",
		'ko-kr': "모든 기술을 사용하기 때문에\n포켓몬의 조상이라고 생각하는\n학자가 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psy Report",
			'fr-fr': "Observation Psychique",
			'es-es': "Psicoinforme",
			'it-it': "Psicosoffiata",
			'de-de': "Psycho-Offenlegung",
			'pt-br': "Relatório Psíquico",
			'ko-kr': "사이코리포트"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten.",
			'pt-br': "Seu oponente revela a mão dele.",
			'ko-kr': "상대의 패의 앞면을 모두 본다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond"
}

export default card
