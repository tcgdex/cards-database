import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ",
		'zh-tw': "一家鼠",
		th: "อิกคาเนซูมิ",
		id: "Maushold"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [925],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。",
		'zh-tw': "身型大的２隻會在戰鬥的同時保護著孩子。對抗實力 強大的對手時會集體出陣。",
		th: "ตัวใหญ่ 2 ตัวจะคอยปกป้องพวกตัวเล็กพลางต่อสู้ไปด้วย จะเผชิญหน้ากับคู่ต่อสู้ที่แข็งแกร่งด้วยกันทุกตัว",
		id: "Dua ekor Maushold besar bertarung sambil melindungi anak-anak mereka. Seluruh Pokémon ini ikut bertarung menghadapi musuh yang kuat."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ビンタ",
			'zh-tw': "巴掌",
			th: "ตบ",
			id: "Menampar"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ファミリーアタック",
			'zh-tw': "家族攻擊",
			th: "แฟมิลีแอทแทก",
			id: "Family Attack"
		},

		damage: 70,

		effect: {
			ja: "自分の場の「イッカネズミ」の数×70ダメージ。",
			'zh-tw': "造成自己的場上的「一家鼠」的數量×70點傷害。",
			th: "แดเมจจะเท่ากับจำนวน [อิกคาเนซูมิ] บนกระดานฝ่ายเรา x70",
			id: "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap Maushold di Arena sendiri."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card