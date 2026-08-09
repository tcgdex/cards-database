import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイバラ",
		'zh-tw': "鐵荊棘",
		th: "หนามเหล็ก",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ある 探検記で テツノイバラと 紹介されている 物体と 一致する 特徴が ある。",
		'zh-tw': "有一部分的特徵與某本探險記裡以鐵荊棘 來介紹的物體一致。",
		th: "มีลักษณะเด่นตรงกับวัตถุที่แนะนำว่าเป็นหนามเหล็กในบันทึกการสำรวจเล่มหนึ่ง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "デスタプレッサー",
				'zh-tw': "壞死壓榨",
				th: "บีบอัดแหลกลาญ",
			},
			damage: "70×",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の山札を上から5枚オモテにして、その中にある「未来」のカードの枚数×70ダメージ。オモテにした「未来」のカードはトラッシュし、残りのカードは山札にもどして切る。",
				'zh-tw': "將自己的牌庫上方5張卡翻到正面，造成其中的「未來」卡的張數×70點傷害。將翻到正面的「未來」卡丟棄，將剩餘卡放回牌庫並重洗。",
				th: "หงายการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา ทำแดเมจเท่ากับจำนวนการ์ด [อนาคต] ที่อยู่ในนั้น x70 ทิ้งการ์ด [อนาคต] ที่หงายไว้ที่ตำแหน่งทิ้งการ์ด การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			},
		},
		{
			name: {
				ja: "メガトンラリアット",
				'zh-tw': "百萬噸金勾臂",
				th: "เมกะตันแลเรียท",
			},
			damage: 140,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752961,
				tcgplayer: 566228,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [995],
};

export default card;
