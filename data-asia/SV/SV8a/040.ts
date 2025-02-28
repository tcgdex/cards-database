import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "グレイシア",
		id: "Glaceon",
		th: "กราเซีย",
		'zh-tw': "冰伊布",
		'zh-cn': "冰伊布"
	},

	illustrator: "Keisin",
	rarity: "None",
	category: "Pokemon",
	dexId: [471],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "体温を 下げることで 全身の 体毛を 凍らせて 鋭く 尖った 針のようにして 飛ばす。",
		id: "Dengan menurunkan suhu tubuhnya, Glaceon membekukan bulu badannya menjadi seperti jarum yang lancip dan tajam lalu menerbangkannya.",
		th: "ทำให้ตัวเย็นลงเพื่อให้ขนแข็งคมราวเข็มแล้วสะบัดออกไป",
		'zh-tw': "透過使體溫下降， 讓全身的體毛結凍， 並像尖銳的針一般發射。",
		'zh-cn': "透過使體溫下降， 讓全身的體毛結凍， 並像尖銳的針一般發射。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しみいるれいき",
			id: "Hawa Dingin Meresap",
			th: "ไอเย็นซึมลึก",
			'zh-tw': "滲透寒氣",
			'zh-cn': "滲透寒氣"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを9個のせる。",
			id: "Pada akhir giliran lawan berikutnya, letakkan 9 Token Kerusakan pada Pokémon yang menerima serangan ini.",
			th: "เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม วางตัวนับแดเมจ 9 ตัวบนโปเกมอนที่ได้รับท่าต่อสู้นี้",
			'zh-tw': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置9個傷害指示物。",
			'zh-cn': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置9個傷害指示物。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "つららミサイル",
			id: "Misil Pilar Es",
			th: "มิสไซล์แท่งน้ำแข็ง",
			'zh-tw': "冰柱飛彈",
			'zh-cn': "冰柱飛彈"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card