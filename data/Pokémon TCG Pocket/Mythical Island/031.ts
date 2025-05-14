import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Mew",
		fr: "Mew",
		es: "Mew",
		it: "Mew",
		de: "Mew",
		'pt-br': "Mew",
		ko: "뮤"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
		fr: "Nombre de scientifiques voient en lui l'ancêtre des Pokémon\ncar il maîtrise toutes leurs capacités.",
		es: "Varios científicos lo consideran el antecesor de los\nPokémon porque usa todo tipo de movimientos.",
		it: "Poiché sa usare qualsiasi mossa,\nmolti scienziati ritengono che Mew\nsia l'antenato di tutti i Pokémon.",
		de: "Es beherrscht alle möglichen Attacken, daher sieht\nman in ihm den Vorfahren aller Pokémon.",
		'pt-br': "Como pode usar todos os tipos de movimentos,\nmuitos cientistas acreditam que Mew seja\no ancestral dos Pokémon.",
		ko: "모든 기술을 사용하기 때문에\n포켓몬의 조상이라고 생각하는\n학자가 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psy Report",
			fr: "Observation Psychique",
			es: "Psicoinforme",
			it: "Psicosoffiata",
			de: "Psycho-Offenlegung",
			'pt-br': "Relatório Psíquico",
			ko: "사이코리포트"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			de: "Dein Gegner zeigt dir seine Handkarten.",
			'pt-br': "Seu oponente revela a mão dele.",
			ko: "상대의 패의 앞면을 모두 본다."
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
