import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼラオラVMAX",
		'zh-tw': "捷拉奧拉VMAX",
		'th-th': "เซราโอราVMAX",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "リアクトパルス",
				'zh-tw': "反應脈衝",
				'th-th': "รีแอ็กพัลส์",
			},
			damage: "60×",
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "相手の場の特性を持つポケモンの数×60ダメージ。",
				'zh-tw': "造成對手場上擁有特性的寶可夢的數量×60點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนโปเกมอนที่มีความสามารถบนกระดานฝ่ายตรงข้าม x60",
			},
		},
		{
			name: {
				'ja-jp': "ダイフィスト",
				'zh-tw': "極巨電拳",
				'th-th': "ไดฟิสต์",
			},
			damage: 240,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687521,
				tcgplayer: 571579,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゼラオラV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [807],
};

export default card;
