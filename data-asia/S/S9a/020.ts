import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象牙豬",
		ja: "マンムー"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "在１萬年前的壁畫上也能見到牠的身影。曾有一段時期， 人們認為牠已經滅絕了。",
		ja: "１万年前の 壁画にも 描かれている。 絶滅したと 考えられていた 時期もある。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "暴風雪",
			ja: "ふぶき"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰山壓制",
			ja: "ひょうざんプレス"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。次の相手の番、このワザを受けたポケモンは、ワザが使えない。"
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [473]
}

export default card