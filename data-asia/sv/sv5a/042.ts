import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ウインディ",
		'zh-tw': "洗翠 風速狗",
		th: "ฮิซุย วินดี"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "燃え盛る炎 牙に纏わせ 食らい付く。 体躯 大柄なれど 陽動 鮮やかなりて 敵 翻弄せしむる姿 演舞の如し。",
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。雖然體型很大，卻能以靈巧的假動作戲弄敵手， 那姿態就像是舞蹈一般。",
		th: "เอาเปลวเพลิงลุกโชนคลุมเขี้ยวไว้แล้วกัดไม่ปล่อย มีรูปร่างใหญ่โต แต่ท่วงท่าที่หันเหความสนใจได้อย่างคล่องแคล่วเพื่อหลอกล่อศัตรูนั้นประดุจดังการแสดงร่ายรำ"
	},

	stage: "Stage1",

	attacks: [{


		name: {
			ja: "プライドファング",
			'zh-tw': "驕傲獠牙",
			th: "คมเขี้ยวหยิ่งทะนง"
		},

		damage: "30+",

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、90ダメージ追加。",
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加90點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			th: "เพลิงประลัยกัลป์"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card