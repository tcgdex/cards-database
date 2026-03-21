import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ノズパス",
		'zh-tw': "朝北鼻",
		th: "โนซพาส"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [299],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "強力な 磁力で 獲物を 引き寄せ 動かず 狩りを するが 天敵を 引き寄せることもある。",
		'zh-tw': "牠會動也不動地用強大的磁力把獵物吸過來獵捕，但有時也會把天敵吸來。",
		th: "จะล่าเหยื่อแบบไม่ต้องขยับตัว โดยใช้พลังแม่เหล็กแรงกล้าดึงตัวเหยื่อเข้าหา แต่บางครั้งก็ดึงเอาศัตรูเข้ามาเหมือนกัน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てつあつめ",
			'zh-tw': "集鐵",
			th: "สะสมเหล็ก"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【鋼】能量」卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724004
	}
}

export default card