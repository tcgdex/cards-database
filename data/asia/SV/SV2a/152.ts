import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーシール",
		'zh-tw': "能量貼紙",
		'th-th': "สติกเกอร์พลังงาน",
		'id-id': "Stiker Energi",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。",
		'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。",
		'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada Pokémon Cadangan.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719605,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837524,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837525,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Uncommon",
};

export default card;
