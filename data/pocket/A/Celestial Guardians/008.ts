import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'de-de': "Trombork",
		'pt-br': "Trevenant",
		'ko-kr': "대로트"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [709],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Phantump"
	},

	description: {
		'en-us': "People fear it due to a belief that it devours any who try to cut down trees in its forest, but to the Pokémon it shares its woods with, it's kind.",
		'fr-fr': "Les bûcherons qui viennent couper des arbres\nen forêt ont peur d'être dévorés par Desséliande.\nIl est gentil avec les Pokémon habitant les bois.",
		'es-es': "Los humanos lo temen porque devora a\nquienes osen talar los árboles, pero es amable\ncon los Pokémon que habitan en el bosque.",
		'it-it': "Gli esseri umani lo temono perché mangia chi abbatte gli alberi.\nTuttavia è sempre gentile con i Pokémon che vivono nei boschi.",
		'de-de': "Es wird dafür gefürchtet, Menschen zu fressen,\ndie Bäume im Wald fällen. Zu den Pokémon,\ndie den Wald bewohnen, ist es aber stets nett.",
		'pt-br': "Este Pokémon é temido porque acreditam que devorará\nqualquer pessoa que ousar cortar árvores na sua floresta.\nPorém, é muito gentil com os outros Pokémon da floresta.",
		'ko-kr': "숲에서 나무를 베는 인간을\n잡아먹는다는 공포의 대상이지만\n숲속에 사는 포켓몬들에게는 상냥하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'de-de': "Klauenschlitzer",
			'pt-br': "Golpe de Garra",
			'ko-kr': "발톱 베어가르기"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card