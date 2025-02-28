import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドン",
		id: "Koraidon",
		th: "โคไรดอน",
		'zh-tw': "故勒頓",
		'zh-cn': "故勒頓"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [1007],
	hp: 140,
	types: ["Dragon"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
		id: "Kabarnya, identitas asli Winged King yang membelah tanah dengan tinjunya seperti yang tertulis dalam jurnal ekspedisi kuno adalah Koraidon.",
		th: "ดูเหมือนว่าจะเป็นร่างที่แท้จริงของราชาแห่งปีกที่ในบันทึกการสำรวจเก่ากล่าวว่ามันเคยแยกแผ่นดินด้วยกำปั้น",
		'zh-tw': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。",
		'zh-cn': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんせいらんだ",
			id: "Pukulan Kacau Primitif",
			th: "ตีไม่ยั้งแต่บรรพกาล",
			'zh-tw': "原生亂打",
			'zh-cn': "原生亂打"
		},

		damage: "30×",

		effect: {
			ja: "自分の場の「古代」のポケモンの数×30ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Pokémon Purba di Arena sendiri.",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอน [โบราณ] บนกระดานฝ่ายเรา x30",
			'zh-tw': "造成自己的場上的「古代」寶可夢的數量×30點傷害。",
			'zh-cn': "造成自己的場上的「古代」寶可夢的數量×30點傷害。"
		}
	}, {
		cost: ["Fire", "Fighting", "Colorless"],

		name: {
			ja: "ひきさく",
			id: "Merobek",
			th: "ฉีกกระจุย",
			'zh-tw': "撕裂",
			'zh-cn': "撕裂"
		},

		damage: 130,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card