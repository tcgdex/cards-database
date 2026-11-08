import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'de-de': "Megalon",
		'pt-br': "Beheeyem",
		'ko-kr': "벰크"
	},

	illustrator: "sowsow",
	category: "Pokemon",

	dexId: [606],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Elgyem"
	},

	description: {
		'en-us': "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.",
		'fr-fr': "À chaque fois que Neitram se matérialise dans une pâture,\nun Moumouflon disparaît dans des circonstances mystérieuses.",
		'es-es': "Por algún extraño motivo, siempre que se avista un\nBeheeyem en una granja desaparece un Dubwool.",
		'it-it': "Per qualche strano motivo, nelle fattorie in cui\ncompare un Beheeyem sparisce sempre un Dubwool.",
		'de-de': "Jedes Mal, wenn ein Megalon auf einer Farm\nauftaucht, verschwindet bald darauf ein\nZwollock unter mysteriösen Umständen.",
		'pt-br': "Sempre que um Beheeyem visita uma fazenda,\num Dubwool desaparece misteriosamente.",
		'ko-kr': "벰크가 나타난 목장에서는\n배우르 1마리가\n어느샌가 모습을 감춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Mind Jack",
			'fr-fr': "Emprise Mentale",
			'es-es': "Levantamente",
			'it-it': "Sollevamente",
			'de-de': "Gedankenstoß",
			'pt-br': "Tomada Mental",
			'ko-kr': "마인드잭"
		},

		damage: "10+",
		cost: ["Psychic"],

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬의 수 × 20데미지를 추가한다."
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
