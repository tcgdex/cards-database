import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena",
		fr: "Sucreine",
		es: "Tsareena",
		it: "Tsareena",
		de: "Fruyal",
		'pt-br': "Tsareena",
		ko: "달코퀸"
	},

	illustrator: "Hasuno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee"
	},

	description: {
		en: "This Pokémon is proud and aggressive. However, it is said that a Tsareena will instantly become calm if someone touches the crown on its calyx.",
		fr: "Ce Pokémon est aussi fier qu'agressif.\nOn dit néanmoins qu'il se calme instantanément\nquand on touche la couronne sur sa tête.",
		es: "Es un Pokémon muy orgulloso y agresivo. Sin embargo, se dice\nque, si se le toca la corona del cáliz, se tranquiliza de inmediato.",
		it: "È un Pokémon aggressivo e orgoglioso,\nma si dice che sia sufficiente toccare la\ncoroncina che ha sul calice per farlo calmare.",
		de: "Zwar ist es stolz und aggressiv, aber wenn man seine\nKrone berührt, soll es sich augenblicklich beruhigen.",
		'pt-br': "Este Pokémon é orgulhoso e agressivo. Porém, dizem\nque uma Tsareena ficará instantaneamente calma\nse alguém tocar a coroa em seu cálice.",
		ko: "자존심이 강하고 공격적이지만\n꼭지의 왕관을 건드리면\n금세 얌전해진다고 한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Three Kick Combo",
			fr: "Triple Coup de Pied",
			es: "Tripatada",
			it: "Triplice Calcio",
			de: "Tripeltrittkombo",
			'pt-br': "Combo de Três Chutes",
			ko: "삼연각"
		},

		damage: "50x",
		cost: ["Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia 3 volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			ko: "동전을 3번 던져서 앞면이 나온 수 × 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
