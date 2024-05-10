import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポニータ",
		'zh-tw': "小火馬",
		th: "โพนีตะ",
		id: "Ponyta"
	},

	illustrator: "Nurikabe",
	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "ポニータに 認められると 燃える たてがみに 触っても 不思議と 熱くなくなるのだ。",
		'zh-tw': "得到了小火馬認可的人，在觸摸牠燃燒著的鬃毛時 不會覺得燙手，真是不可思議。",
		th: "หากได้รับการยอมรับจากโพนีตะแล้ว แม้จะจับแผงขนที่เผาไหม้ก็จะไม่รู้สึกร้อนอย่างน่าประหลาดใจ",
		id: "Jika diakui oleh Ponyta, maka meskipun menyentuh surai membara Pokémon ini, entah kenapa surainya tidak terasa panas."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม",
			id: "Mengumpulkan"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "はねまわる",
			'zh-tw': "活蹦亂跳",
			th: "สะบัดตัว",
			id: "Melompat Berkeliling"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card