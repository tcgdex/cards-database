import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'de-de': "Elfun",
		'pt-br': "Whimsicott",
		'ko-kr': "엘풍"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [547],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Cottonee"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'de-de': "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			'ko-kr': "구르기 태클"
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
		'en-us': "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief.",
		'fr-fr': "Il joue de mauvais tours en répandant son coton.\nSi on le mouille, il s'alourdit et ne peut plus\nbouger, ce qui l'oblige à s'avouer vaincu.",
		'es-es': "Este travieso Pokémon se divierte esparciendo\nbolas de algodón. Al mojarlo, su peso aumenta\ntanto que no logra moverse y se da por vencido.",
		'it-it': "Si diverte a spargere cotone ovunque.\nSe gli si versa dell'acqua addosso, diventa\ntroppo pesante per muoversi e si arrende.",
		'de-de': "Es verstreut Watte, um Leute zu ärgern. Es hört\ndamit auf, wenn es nass wird, weil es dann zu\nschwer ist und sich nicht mehr bewegen kann.",
		'pt-br': "Gosta de pregar peças, espalhando algodão por todo canto.\nSe este Pokémon se molhar, ficará pesado demais para se mover\ne será obrigado a lidar com as consequências das suas traquinagens.",
		'ko-kr': "솜을 흩뿌리며 장난을 친다.\n물을 끼얹으면 무거워져서\n움직일 수 없게 되어 포기한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
