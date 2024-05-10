import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "シルシュルー",
		'zh-tw': "滋汁鼴",
		id: "Shroodle"
	},

	illustrator: "otumami",
	category: "Pokemon",
	dexId: [944],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
		'zh-tw': "雖然性情溫馴，但一旦被激怒，就會用滲入了毒素的尖銳門牙 過來咬住你，讓你全身麻痺不已。",
		id: "Walaupun ramah, Shroodle akan menggigit dan melumpuhkan siapa pun yang membuatnya marah dengan gigi depan tajam berlumur racun miliknya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きのみさがし",
			'zh-tw': "搜尋樹果",
			id: "Mencari Beri"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，在給對手看過後加入手牌。",
			id: "Pilih 1 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			id: "Menggaruk"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card