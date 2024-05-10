import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マフィティフ",
		'zh-tw': "獒教父",
		th: "มาฟีทิฟ",
		id: "Mabosstiff"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [943],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "大きな のど袋に エネルギーを 蓄えることができる。 一気に 放出して 敵を 吹き飛ばす。",
		'zh-tw': "大大的喉囊裡可以儲存能量。會一口氣 釋放出去把敵人轟飛。",
		th: "สามารถเก็บสะสมพลังงานไว้ในถุงขนาดใหญ่ที่คอได้ เป่าศัตรูให้กระเด็นได้ด้วยการปล่อยพลังงานออกไปในคราวเดียว",
		id: "Mabosstiff dapat menyimpan energi di dalam kantong tenggorokannya yang besar. Pokémon ini dengan sekaligus melepaskan seluruh energinya, lalu menghempaskan musuhnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ほうふく",
			'zh-tw': "復仇",
			th: "ตอบโต้เอาคืน",
			id: "Ganjaran"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนแดเมจที่ได้รับมา",
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan Token Kerusakan sejumlah kerusakan yang diterima pada Pokémon yang telah menggunakan serangan."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙",
			th: "เขี้ยวแห่งความมืด",
			id: "Taring Kegelapan"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card