import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベトベトン",
		'zh-tw': "臭臭泥",
		'th-th': "เบโตเบตัน",
		'id-id': "Muk",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		'ja-jp': "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。光是碰到牠的足跡， 都會受到毒素的侵襲。",
		'th-th': "โคลนสกปรกติดทั่วตัว แค่ไปโดนร่องรอยที่มันขยับตัวผ่านก็ติดพิษแล้ว",
		'id-id': "Limbah kotor menyelimuti tubuh Muk. Siapa pun akan keracunan walau hanya menyentuh jejak kakinya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ベトベトジェイル",
				'zh-tw': "臭臭獄",
				'th-th': "จองจำเหนียวเหนอะ",
				'id-id': "Kerangkeng Lengket Melekat",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーとにげるためのエネルギーが、それぞれ[C]エネルギー1個ぶん多くなる。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量與【撤退】所需的能量，各增加1個【無】能量。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้กับพลังงานสำหรับ[หนี] แต่ละอย่างจะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 1 ลูก",
				'id-id': "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk menggunakan serangan dan Mundur masing-masing bertambah 1 Energi {Bening}.",
			},
		},
		{
			name: {
				'ja-jp': "ヘドロばくだん",
				'zh-tw': "污泥炸彈",
				'th-th': "สลัดจ์บอมบ์",
				'id-id': "Bom Limbah",
			},
			damage: 180,
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719531,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837406,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837407,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベトベター",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [89],
};

export default card;
