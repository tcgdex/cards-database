import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アマージョex",
		th: "อมาโจex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アイシクルソール",
			th: "ฝ่าเท้าแท่งน้ำแข็ง"
		},

		effect: {
			ja: "相手のポケモン1匹に、そのポケモンの残りHPが「30」になるように、ダメカンをのせる。",
			th: "วางตัวนับแดเมจ บนโปเกมอนฝ่ายตรงข้าม 1 ตัว ให้ HP ของโปเกมอนนั้นเหลือเท่ากับ [30]"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "トロピカルキック",
			th: "ทรอปิคัลคิก"
		},

		damage: 180,

		effect: {
			ja: "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30] รักษาสภาวะผิดปกติทั้งหมดด้วย"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card