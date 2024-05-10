import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ワニノコ",
		'zh-tw': "小鋸鱷",
		th: "วานิโนโกะ"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [158],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。",
		'zh-tw': "個子雖小但是個性粗暴。只要眼前有東西在動， 就會先上去咬一口再說。",
		th: "แม้ตัวจะเล็ก แต่ก็เป็นจอมเกเร หากมีอะไรเคลื่อนไหวอยู่ตรงหน้า มันก็จะเข้าไปกัดไว้ก่อนเลย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "かじりつく",
			'zh-tw': "咬緊",
			th: "กัด"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card