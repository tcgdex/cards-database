import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'de-de': "Flamara",
		'pt-br': "Flareon",
		'ko-kr': "부스터"
	},

	illustrator: "sui",
	category: "Pokemon",

	dexId: [136],
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Eevee"
	},

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'de-de': "Flammenwurf",
			'pt-br': "Lança-chamas",
			'ko-kr': "화염방사"
		},

		effect: {
			'en-us': "Discard 1 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'it-it': "Rimuovi un'Energia {R} da questo Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon ab.",
			'pt-br': "Descarte 1 Energia {R} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 1개 트래쉬한다."
		},

		damage: "110"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.",
		'fr-fr': "Sa glande enflammée chauffe l'air qu'il inspire.\nIl l'exhale ensuite sous forme de flamme\natteignant les 1 700 °C.",
		'es-es': "Calienta el aire que inhala en su saca\nde fuego y lo expulsa a 1700 °C.",
		'it-it': "L'aria che inspira si infiamma passando per la\nsacca ardente che ha nel corpo, per poi essere\nespirata alla temperatura di 1.700 ºC.",
		'de-de': "Es speichert Atemluft in einem Flammensack.\nDort erhitzt es sie auf 1700 °C, um sie als\nFlammen auszuspucken.",
		'pt-br': "O ar inalado é transportado para sua bolsa\nde chamas, aquecido e exalado quando\no fogo atinge mais de 1600 ºC.",
		'ko-kr': "들이마신 공기를 체내의\n불꽃 주머니에 보내\n1700도의 불꽃으로 내뿜는다."
	},

	boosters: ["charizard"]
}

export default card
