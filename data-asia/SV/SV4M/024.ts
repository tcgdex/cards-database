import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼブライカ",
		'zh-tw': "雷電斑馬",
		th: "ซีบรายกา"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [523],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
		'zh-tw': "有著閃電般的爆發力。如果雷電斑馬全速奔馳，雷聲就會響徹雲霄。",
		th: "มีพลังพุ่งตัวชั่วพริบตาเหมือนสายฟ้า เมื่อซีบรายกาวิ่งเต็มกำลัง จะเกิดเสียงฟ้าร้องกึกก้อง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "はじけるいななき",
			'zh-tw': "濺射嘶鳴",
			th: "ม้าร้องระเบิด"
		},

		effect: {
			ja: "相手がすでにとったサイドの枚数ぶんまで、自分のトラッシュから「基本エネルギー」を選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "從自己的棄牌區選擇最多與對手已經獲得的獎賞卡的張數相同數量的「基本【雷】能量」卡，以任意方式附於自己的寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] จากตำแหน่งทิ้งการ์ดฝ่ายเรา ได้สูงสุดไม่เกินจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว ติดที่โปเกมอนฝ่ายเราตามชอบ"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "かみなり",
			'zh-tw': "打雷",
			th: "ฟ้าผ่า"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741851
	}
}

export default card