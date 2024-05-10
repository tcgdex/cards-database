import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "マフィティフ",
		'zh-tw': "獒教父",
		th: "มาฟีทิฟ",
		id: "Mabosstiff"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [943],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "子どもと 遊ぶことが 大好き。 普段は 温厚だが 家族を 守るとき 形相が 変わる。",
		'zh-tw': "非常喜歡和小孩玩耍。平時性情溫和，但在保護 家族時表情會為之一變。",
		th: "ชอบเล่นกับเด็กมาก โดยปกติจะมีนิสัยอ่อนโยน แต่เมื่อถึงคราวต้องปกป้องครอบครัวจะมีสีหน้าเปลี่ยนไป",
		id: "Mabosstiff sangat suka bermain dengan anak-anak. Biasanya Pokémon ini bersikap hangat, namun raut wajah berubah ketika melindungi keluarganya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いかくのとおぼえ",
			'zh-tw': "威嚇長嚎",
			th: "เสียงเห่าหอนข่มขวัญ",
			id: "Lolongan Intimidasi"
		},

		effect: {
			ja: "自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "在自己的回合時可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ワイルドタックル",
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แทคเคิล",
			id: "Wild Tackle"
		},

		damage: 160,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card