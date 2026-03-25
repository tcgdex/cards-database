import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		de: "Elfun",
		'pt-br': "Whimsicott",
		ko: "엘풍"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [547],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			de: "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			ko: "구르기 태클"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief.",
		fr: "Il joue de mauvais tours en répandant son coton.\nSi on le mouille, il s'alourdit et ne peut plus\nbouger, ce qui l'oblige à s'avouer vaincu.",
		es: "Este travieso Pokémon se divierte esparciendo\nbolas de algodón. Al mojarlo, su peso aumenta\ntanto que no logra moverse y se da por vencido.",
		it: "Si diverte a spargere cotone ovunque.\nSe gli si versa dell'acqua addosso, diventa\ntroppo pesante per muoversi e si arrende.",
		de: "Es verstreut Watte, um Leute zu ärgern. Es hört\ndamit auf, wenn es nass wird, weil es dann zu\nschwer ist und sich nicht mehr bewegen kann.",
		'pt-br': "Gosta de pregar peças, espalhando algodão por todo canto.\nSe este Pokémon se molhar, ficará pesado demais para se mover\ne será obrigado a lidar com as consequências das suas traquinagens.",
		ko: "솜을 흩뿌리며 장난을 친다.\n물을 끼얹으면 무거워져서\n움직일 수 없게 되어 포기한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
