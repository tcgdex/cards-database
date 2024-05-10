import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイヤー",
		'zh-tw': "火焰鳥"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "美しく 燃えあがる 翼で 山道を 照らし 遭難者を 助けたと 言い伝えられている。",
		'zh-tw': "相傳牠會以美麗燃燒的翅膀照亮山路，救助在 山中遇險的人。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアフロート",
			'zh-tw': "閃焰浮游"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【火】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "えんじょうひこう",
			'zh-tw': "爆燃飛行"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將2個這隻寶可夢身上附加的【火】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
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