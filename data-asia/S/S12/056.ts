import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "坦克臭鼬V",
		th: "สกาแทงค์V",
		ja: "スカタンクV"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "追打炸彈",
			th: "ระเบิดซ้ำเติม",
			ja: "おいうちボム"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到30點傷害。在上個對手的回合，若那隻寶可夢從戰鬥場撤退，則這個招式的傷害改為「120」點。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 30 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนนั้นหนีจากตำแหน่งต่อสู้ แดเมจของท่าต่อสู้นี้จะเป็น [120] {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ja: "相手のベンチポケモン1匹に、30ダメージ。前の相手の番に、そのポケモンがバトル場からにげていたなら、このワザのダメージは「120」になる。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "絕境猛毒",
			th: "พิษกรีดร้อง",
			ja: "ぜっきょうポイズン"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน]",
			ja: "相手のバトルポケモンをどくとこんらんにする。"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card