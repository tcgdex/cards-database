import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "クヌギダマ",
		'zh-tw': "榛果球",
		th: "คุนุกิดามะ",
		id: "Pineco"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "口から 吐き出す 液体は 木の皮を つける 接着剤。 空気に 触れると 固まるのだ。",
		'zh-tw': "口中吐出的液體是牠用來貼上樹皮的膠水， 一接觸到空氣就會凝固。",
		th: "ของเหลวที่พ่นออกมาจากปากคือกาวที่เอาไว้ติดเปลือกไม้ พอโดนอากาศก็จะแข็งตัว",
		id: "Cairan yang dimuntahkan Pineco dari mulutnya adalah perekat untuk menempelkan kulit pohon ke tubuhnya. Cairan tersebut mengeras jika terkena udara."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制",
			th: "การ์ดเพรส",
			id: "Guard Press"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card