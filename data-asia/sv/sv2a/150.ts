import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウツー",
		'zh-tw': "超夢"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子を 組み替えて 生み出された。ポケモンで 一番 凶暴な 心を 持つという。",
		'zh-tw': "藉著重組夢幻的基因而誕生。 據說有著所有寶可夢中最殘暴的心。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "リフレクトバリア",
			'zh-tw': "反射屏障"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコストライク",
			'zh-tw': "精神強襲"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card