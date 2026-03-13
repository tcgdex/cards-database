import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツボット",
		'zh-tw': "大食花",
		th: "อุซึบ็อท",
		id: "Victreebel"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [71],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "体内に 取りこまれた ものは どんなに 硬くても 溶解液で 跡形なく 溶かされてしまう。",
		'zh-tw': "被牠吞進體內的東西不管有多硬， 都會被溶解液不留痕跡地融化掉。",
		th: "สิ่งที่เอาใส่เข้าไปในร่างกายไม่ว่าจะแข็งแค่ไหนก็จะถูกละลายด้วยของเหลวทำละลายจนไม่เหลือซาก",
		id: "Semua yang ditelan masuk ke dalam tubuh Victreebel akan leleh tak bersisa oleh cairan peleburnya walau sekeras apa pun itu."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はきだす",
			'zh-tw': "噴出",
			th: "บ้วนออกมา",
			id: "Memuntahkan"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ディレイドアシッド",
			'zh-tw': "遲延酸液",
			th: "ดีเลย์แอซิด",
			id: "Delayed Acid"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを12個のせる。",
			'zh-tw': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置12個傷害指示物。",
			th: "เมื่อจบเทิร์นถัดไปของฝ่ายตรงข้าม วางตัวนับแดเมจ 12 ตัวบนโปเกมอนที่ได้รับท่าต่อสู้นี้",
			id: "Pada akhir giliran lawan berikutnya, letakkan 12 Token Kerusakan pada Pokémon yang menerima serangan ini."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719513
	}
}

export default card