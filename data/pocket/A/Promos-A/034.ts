import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Piplup",
		fr: "Tiplouf",
		es: "Piplup",
		it: "Piplup",
		de: "Plinfa",
		'pt-br': "Piplup",
		ko: "팽도리"
	},

	illustrator: "Kariya",
	rarity: "None",
	category: "Pokemon",

	dexId: [393],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It doesn't like to be taken care of. It's difficult to\nbond with since it won't listen to its Trainer.",
		fr: "Ce Pokémon est difficile à entraîner car il est très\ndésobéissant et déteste qu'on lui rende service.",
		es: "No le gusta que lo cuiden. Como no aprecia el apoyo\nde su Entrenador, le cuesta coger confianza con él.",
		it: "Molto orgoglioso. Difficile farci amicizia\nperché non ascolta mai i consigli dell'Allenatore.",
		de: "Einmischung kann es gar nicht leiden. Es ist bockig\nund fasst nur schwer Zutrauen zu seinem Trainer.",
		'pt-br': "Estes Pokémon não gostam que tomem conta deles.\nÉ muito difícil criar laços com eles,\npois não costumam obedecer aos seus Treinadores.",
		ko: "신세를 지는 것을 싫어한다.\n트레이너의 지시를 듣지 않아\n친해지기 어렵다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			es: "Siesta",
			it: "Pausa",
			de: "Nickerchen",
			'pt-br': "Soneca",
			ko: "잠시 쉬기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 20회복."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card

