import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		de: "Megalon",
		'pt-br': "Beheeyem",
		ko: "벰크"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Elgyem"
	},

	description: {
		en: "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.",
		fr: "À chaque fois que Neitram se matérialise dans une pâture,\nun Moumouflon disparaît dans des circonstances mystérieuses.",
		es: "Por algún extraño motivo, siempre que se avista un\nBeheeyem en una granja desaparece un Dubwool.",
		it: "Per qualche strano motivo, nelle fattorie in cui\ncompare un Beheeyem sparisce sempre un Dubwool.",
		de: "Jedes Mal, wenn ein Megalon auf einer Farm\nauftaucht, verschwindet bald darauf ein\nZwollock unter mysteriösen Umständen.",
		'pt-br': "Sempre que um Beheeyem visita uma fazenda,\num Dubwool desaparece misteriosamente.",
		ko: "벰크가 나타난 목장에서는\n배우르 1마리가\n어느샌가 모습을 감춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
			es: "Levantamente",
			it: "Sollevamente",
			de: "Gedankenstoß",
			'pt-br': "Tomada Mental",
			ko: "마인드잭"
		},

		damage: "10+",
		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬의 수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
