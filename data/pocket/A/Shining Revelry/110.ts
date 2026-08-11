import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lucario ex",
		'fr-fr': "Lucario-ex",
		'es-es': "Lucario ex",
		'it-it': "Lucario-ex",
		'de-de': "Lucario-ex",
		'pt-br': "Lucario ex",
		'ko-kr': "루카리오 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [448],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Riolu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Aura Sphere",
			'fr-fr': "Aurasphère",
			'es-es': "Esfera Aural",
			'it-it': "Sferapulsar",
			'de-de': "Aurasphäre",
			'pt-br': "Aura Esférica",
			'ko-kr': "파동탄"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à un des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 1마리에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Shiny"
}

export default card