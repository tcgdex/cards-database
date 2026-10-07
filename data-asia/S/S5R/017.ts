import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [116],
	rarity: "Common",
	set: Set,

	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
		th: "ทัททู"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "サンゴの 陰に 住処を 作る。 危険を 感じると 口から 真っ黒い 墨を 吐いて 逃げる。",
		'zh-tw': "會在珊瑚的陰影處安家。如果感到危險，就會從口中吐出漆黑的墨汁逃跑。",
		th: "สร้างที่อยู่ที่ด้านหลังของหินปะการัง พอรู้สึกถึงอันตรายก็จะพ่นหมึกดำออกมาจากปากแล้วหนีไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "えんまく",
			'zh-tw': "煙幕",
			th: "พ่นควัน"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นั้นล้มเหลว"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533657, tcgplayer: 569058, cardtrader: 240022 } }
	]
}

export default card