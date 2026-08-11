import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garchomp ex",
		'fr-fr': "Carchacrok-ex",
		'es-es': "Garchomp ex",
		'it-it': "Garchomp-ex",
		'de-de': "Knakrack-ex",
		'pt-br': "Garchomp ex",
		'ko-kr': "한카리아스 ex"
	},

	illustrator: "toriyufu",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [445],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gabite"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Linear Attack",
			'fr-fr': "Attaque Linéaire",
			'es-es': "Ataque Lineal",
			'it-it': "Attacco Lineare",
			'de-de': "Linearer Angriff",
			'pt-br': "Ataque Linear",
			'ko-kr': "직격탄"
		},

		cost: ["Fighting"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon\ndel tuo avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 1마리에게 50데미지를 준다."
		}
	}, {
		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'de-de': "Drachenklaue",
			'pt-br': "Garra de Dragão",
			'ko-kr': "드래곤클로"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card