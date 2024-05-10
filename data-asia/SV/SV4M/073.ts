import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラ",
		th: "เควสพัตรา"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [956],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "色とりどりの フリルの 隙間から サイコパワーを 放出して 時速２００キロで 疾走する。",
		th: "ปล่อยพลังจิตออกจากช่องว่างของจีบระบายหลากสีสันและวิ่งด้วยความเร็ว 200 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みきわめ",
			th: "เพ่งพินิจ"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง จนกว่าจะจบเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "グリッターアイズ",
			th: "เนตรแวววาว"
		},

		damage: "70+",

		effect: {
			ja: "自分のトラッシュに「リップ」があるなら、70ダメージ追加。",
			th: "ถ้ามีการ์ด [ลิป] บนตำแหน่งทิ้งการ์ดฝ่ายเรา การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card