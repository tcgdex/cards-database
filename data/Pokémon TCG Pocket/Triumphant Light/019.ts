import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		de: "Frosdedje",
		'pt-br': "Froslass",
		ko: "눈여아"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snorunt"
	},

	description: {
		en: "When it finds humans or Pokémon it likes, it freezes them and takes them to its chilly den, where they become decorations.",
		fr: "Il congèle les êtres humains et les Pokémon\nqui lui plaisent. Il les emmène ensuite\ndans sa tanière pour les admirer à loisir.",
		es: "Con su gélido aliento congela a todo Pokémon\no humano que le llame la atención y se lo lleva\na su guarida para usarlo como objeto decorativo.",
		it: "Con il suo alito glaciale congela gli esseri\numani e i Pokémon che gli piacciono\ne li usa per decorare la sua tana.",
		de: "Menschen und Pokémon, die ihm gefallen,\nfriert es mit eisiger Luft ein. Dann nimmt es\nsie mit in seinen Bau und stellt sie dort aus.",
		'pt-br': "Quando encontra humanos ou Pokémon de que gosta,\ncongela-os e os leva para seu covil gelado,\nonde são transformados em decoração.",
		ko: "마음에 든 인간과 포켓몬을\n냉기로 얼린 다음\n보금자리에 가져가서 장식한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			de: "Blizzard",
			'pt-br': "Nevasca",
			ko: "눈보라"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
