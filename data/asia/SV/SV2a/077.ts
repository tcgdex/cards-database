import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポニータ",
		'zh-tw': "小火馬",
		'th-th': "โพนีตะ",
		'id-id': "Ponyta",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "ポニータに 認められると 燃える たてがみに 触っても 不思議と 熱くなくなるのだ。",
		'zh-tw': "得到了小火馬認可的人，在觸摸牠燃燒著的鬃毛時 不會覺得燙手，真是不可思議。",
		'th-th': "หากได้รับการยอมรับจากโพนีตะแล้ว แม้จะจับแผงขนที่เผาไหม้ก็จะไม่รู้สึกร้อนอย่างน่าประหลาดใจ",
		'id-id': "Jika diakui oleh Ponyta, maka meskipun menyentuh surai membara Pokémon ini, entah kenapa surainya tidak terasa panas.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "もってくる",
				'zh-tw': "呼喚",
				'th-th': "รวบรวม",
				'id-id': "Mengumpulkan",
			},
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
				'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
				'id-id': "Ambil 1 kartu dari atas Deck sendiri.",
			},
		},
		{
			name: {
				'ja-jp': "はねまわる",
				'zh-tw': "活蹦亂跳",
				'th-th': "สะบัดตัว",
				'id-id': "Melompat Berkeliling",
			},
			damage: 30,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719519,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837379,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837380,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [77],
};

export default card;
