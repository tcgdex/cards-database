import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈罩夜菇",
		'zh-cn': "燈罩夜菇",
		ja: "マシェード"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "用孢子閃爍著的光 吸引獵物，讓對方睡著。 會從指尖吸收精氣。",
		'zh-cn': "用孢子閃爍著的光 吸引獵物，讓對方睡著。 會從指尖吸收精氣。",
		ja: "点滅する 胞子の 光りで 獲物を おびき寄せて 眠らせる。 指先から 生気を 吸い取る。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "平靜之光",
			'zh-cn': "平靜之光",
			ja: "やすらぐひかり"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【睡眠】。",
			'zh-cn': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【睡眠】。",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをねむりにする。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "螺旋衝刺",
			'zh-cn': "螺旋衝刺",
			ja: "スパイラルラッシュ"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
			'zh-cn': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [756],

	thirdParty: {
		cardmarket: 787563
	}
}

export default card