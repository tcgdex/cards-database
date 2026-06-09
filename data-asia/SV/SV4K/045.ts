import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルバット",
		'zh-tw': "大嘴蝠",
		th: "โกลแบท",
		ko: "골뱃"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。",
		'zh-tw': "能以小小的腳靈巧地步行。會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。",
		th: "เดินอย่างคล่องตัวด้วยขาขนาดเล็ก แอบฝังเขี้ยวเข้ากับเหยื่อที่กำลังหลับใหลและดูดเลือด",
		ko: "작은 다리로 능숙하게 걷는다. 자고 있는 먹이에게 살며시 다가가 이빨을 꽂아 피를 빨아먹는다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きゅうけつ",
			'zh-tw': "吸血",
			th: "ดูดเลือด",
			ko: "흡혈"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			ko: "상대의 배틀 포켓몬에게 준 데미지만큼 이 포켓몬의 HP를 회복한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741405
	}
}

export default card