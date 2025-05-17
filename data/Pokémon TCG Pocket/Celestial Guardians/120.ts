import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		de: "Cavalanzas",
		'pt-br': "Escavalier",
		ko: "슈바르고"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Karrablast"
	},

	description: {
		en: "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
		fr: "Ce Pokémon se protège avec la carapace\ndérobée à un Escargaume et attaque\navec ses deux redoutables lances.",
		es: "Se defienden de los ataques con el caparazón que roban\na los Shelmet. Atacan con sus dos mortíferas lanzas.",
		it: "Protegge il corpo con la conchiglia che ha rubato a\nShelmet mentre spunzona il nemico con due lance.",
		de: "Eine von einem Schnuthelm gestohlene Muschel\ndient ihm als Helm. Es greift Gegner mit seinen\nbeiden Lanzen an.",
		'pt-br': "Usando a cobertura que roubaram de Shelmet,\nse defendem e atacam com duas lanças.",
		ko: "쪼마리에게서 뺏은 껍질로\n몸을 에워싸 가드하면서\n2개의 창으로 찔러온다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pike",
			fr: "Javelot",
			es: "Lanza",
			it: "Picca",
			de: "Langspieß",
			'pt-br': "Lança",
			ko: "롱스피어"
		},

		damage: 30,
		cost: ["Metal"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card