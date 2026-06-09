import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp ex",
		fr: "Carchacrok-ex",
		es: "Garchomp ex",
		it: "Garchomp-ex",
		de: "Knakrack-ex",
		'pt-br': "Garchomp ex",
		ko: "한카리아스 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [445],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gabite"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Linear Attack",
			fr: "Attaque Linéaire",
			es: "Ataque Lineal",
			it: "Attacco Lineare",
			de: "Linearer Angriff",
			'pt-br': "Ataque Linear",
			ko: "직격탄"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon\ndel tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
			ko: "상대의 포켓몬 1마리에게 50데미지를 준다."
		}
	}, {
		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			de: "Drachenklaue",
			'pt-br': "Garra de Dragão",
			ko: "드래곤클로"
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