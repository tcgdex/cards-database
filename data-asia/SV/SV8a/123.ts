import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドン",
		id: "Miraidon",
		th: "มิไรดอน",
		'zh-tw': "密勒頓",
		'zh-cn': "密勒頓"
	},

	illustrator: "akagi",
	rarity: "None",
	category: "Pokemon",
	dexId: [1008],
	hp: 110,
	types: ["Dragon"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
		id: "Tampaknya Miraidon tertera di buku kuno dengan nama Iron Serpent. Dikabarkan Pokémon ini mengubah tanah lapang menjadi abu dengan petir.",
		th: "ดูเหมือนว่าจะเป็นนาคเหล็กซึ่งมีชื่อในบันทึกเก่าแก่ ว่ากันว่ามันใช้สายฟ้าทำให้ผืนดินกลายเป็นเถ้าถ่าน",
		'zh-tw': "牠似乎就是古書裡所提及的 鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。",
		'zh-cn': "牠似乎就是古書裡所提及的 鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "アクセルピーク",
			id: "Accel Peak",
			th: "แอกเซลพีก",
			'zh-tw': "暴衝高點",
			'zh-cn': "暴衝高點"
		},

		damage: 40,

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、自分の「未来」のポケモンに好きなようにつける。そして山札を切る。",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon Futur sendiri. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน [อนาคต] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的「未來」寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的「未來」寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Psychic"],

		name: {
			ja: "スパーキングアタック",
			id: "Sparking Attack",
			th: "สปาร์กกิงแอทแทก",
			'zh-tw': "閃雷攻擊",
			'zh-cn': "閃雷攻擊"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card