import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'de-de': "Frosdedje",
		'pt-br': "Froslass",
		'ko-kr': "눈여아"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [478],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snorunt"
	},

	description: {
		'en-us': "When it finds humans or Pokémon it likes, it freezes them and takes them to its chilly den, where they become decorations.",
		'fr-fr': "Il congèle les êtres humains et les Pokémon\nqui lui plaisent. Il les emmène ensuite\ndans sa tanière pour les admirer à loisir.",
		'es-es': "Con su gélido aliento congela a todo Pokémon\no humano que le llame la atención y se lo lleva\na su guarida para usarlo como objeto decorativo.",
		'it-it': "Con il suo alito glaciale congela gli esseri\numani e i Pokémon che gli piacciono\ne li usa per decorare la sua tana.",
		'de-de': "Menschen und Pokémon, die ihm gefallen,\nfriert es mit eisiger Luft ein. Dann nimmt es\nsie mit in seinen Bau und stellt sie dort aus.",
		'pt-br': "Quando encontra humanos ou Pokémon de que gosta,\ncongela-os e os leva para seu covil gelado,\nonde são transformados em decoração.",
		'ko-kr': "마음에 든 인간과 포켓몬을\n냉기로 얼린 다음\n보금자리에 가져가서 장식한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'de-de': "Blizzard",
			'pt-br': "Nevasca",
			'ko-kr': "눈보라"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
