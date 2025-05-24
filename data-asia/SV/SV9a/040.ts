import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼラオラ",
		'zh-tw': "捷拉奧拉",
		'zh-cn': "捷拉奧拉"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [807],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "手足の 肉球から 放電。 ゼラオラが 駆け抜けると 稲妻が 光り 雷鳴が 轟く。",
		'zh-tw': "從手腳的肉球放電。 當捷拉奧拉奔馳而過時， 周圍將充斥著電閃雷鳴。",
		'zh-cn': "從手腳的肉球放電。 當捷拉奧拉奔馳而過時， 周圍將充斥著電閃雷鳴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			'zh-cn': "抓"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "サンダーブリッツ",
			'zh-tw': "閃電急襲",
			'zh-cn': "閃電急襲"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチの「ポケモンex」1匹に、210ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的備戰區的1隻「寶可夢【ex】」受到210點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的備戰區的1隻「寶可夢【ex】」受到210點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card