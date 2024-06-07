import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ",
		'zh-tw': "膽小蟲",
		th: "โคโซคูมูชิ"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "群れで かたまり つねに まわりを 警戒している。 敵の 気配を 感じると 散り散りに 逃げ出す。",
		'zh-tw': "成群聚集，隨時保持警惕。只要察覺到有敵人， 就會分散開來四處逃竄。",
		th: "รวมกันเป็นฝูงคอยระแวดระวังรอบข้างอยู่ตลอด ถ้ารู้สึกถึงวี่แววของศัตรูก็จะหนีกระจัดกระจายกันไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "かくれる",
			'zh-tw': "躲藏",
			th: "ซ่อน"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card