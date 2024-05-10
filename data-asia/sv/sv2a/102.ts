import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマタマ",
		'zh-tw': "蛋蛋"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "６匹で いないと 落ち着かない。 １匹でも いなくなると とたんに 逃げ腰に なるのだ。",
		'zh-tw': "非得湊齊６隻才會有安全感。那怕只是少了１隻，都會立刻 變得很膽小，隨時想要逃跑。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たまころがり",
			'zh-tw': "滾球"
		},

		damage: "30×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card