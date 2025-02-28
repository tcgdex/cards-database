import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テラパゴスex",
		id: "Terapagos ex",
		th: "เทราปากอสex",
		'zh-tw': "太樂巴戈斯ex",
		'zh-cn': "太樂巴戈斯ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ユニオンビート",
			id: "Union Beat",
			th: "ยูเนียนบีต",
			'zh-tw': "聯盟擊",
			'zh-cn': "聯盟擊"
		},

		damage: "30×",

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。",
			id: "Serangan ini tidak dapat digunakan pada giliran pertama Pemain Kedua. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Pokémon Cadangan sendiri.",
			th: "ท่าต่อสู้นี้ ไม่สามารถใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลัง แดเมจจะเท่ากับจำนวนโปเกมอนบนเบนช์ฝ่ายเรา x30",
			'zh-tw': "這個招式在後攻玩家的最初回合無法使用。造成自己的備戰寶可夢的數量×30點傷害。",
			'zh-cn': "這個招式在後攻玩家的最初回合無法使用。造成自己的備戰寶可夢的數量×30點傷害。"
		}
	}, {
		cost: ["Grass", "Water", "Lightning"],

		name: {
			ja: "クラウンオパール",
			id: "Crown Opal",
			th: "คราวน์โอปอล",
			'zh-tw': "皇冠蛋白石",
			'zh-cn': "皇冠蛋白石"
		},

		damage: 180,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモン（ポケモンをのぞく）からワザのダメージを受けない。",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic (selain Pokémon {Bening}).",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน] (ยกเว้นโปเกมอน[ไร้สี])",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢（【無】寶可夢除外）招式的傷害。",
			'zh-cn': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢（【無】寶可夢除外）招式的傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card