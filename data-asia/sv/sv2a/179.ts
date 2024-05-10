import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バリヤード",
		'zh-tw': "魔牆人偶"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [122],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "パントマイムが 得意。 指から 出した 波動で 壁を つくり あまたの 攻撃から 身を守る。",
		'zh-tw': "擅長表演默劇。用手指放出的波動製造牆壁，保護自己免於大多數的攻擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ものまねバリア",
			'zh-tw': "模仿屏障"
		},

		effect: {
			ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、このポケモンは、相手のポケモンからワザのダメージを受けない。",
			'zh-tw': "若這隻寶可夢與對手的戰鬥寶可夢身上附加的能量數量相同，則這隻寶可夢不會受到對手的寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サイコパワー",
			'zh-tw': "精神力量"
		},

		effect: {
			ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。"
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

	retreat: 1,
	regulationMark: "G"
}

export default card