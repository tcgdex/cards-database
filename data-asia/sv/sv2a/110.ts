import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マタドガス",
		'zh-tw': "雙彈瓦斯"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "ごくまれに 突然変異で 双子の 小さい ドガースが 連結したまま 出ることがある。",
		'zh-tw': "有時會因為非常罕見的突變， 出現２個連在一起的 雙胞胎小瓦斯彈。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もろともボム",
			'zh-tw': "齊爆炸彈"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則將使用招式的寶可夢【昏厥】。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピンガス",
			'zh-tw': "旋轉瓦斯"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card