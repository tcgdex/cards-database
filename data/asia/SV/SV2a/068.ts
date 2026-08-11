import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリキー",
		'zh-tw': "怪力",
		'th-th': "ไคริกี",
		'id-id': "Machamp",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'ja-jp': "４本の 腕は 考えるより 早く 反射的に 動き 何発もの パンチを 繰りだせる。",
		'zh-tw': "４隻手臂在思考之前就會反射性地行動， 使出多發拳擊。",
		'th-th': "แขนทั้ง 4 แขนตอบสนองได้รวดเร็วยิ่งกว่าความคิด สามารถออกหมัดได้ทีละหลาย ๆ หมัด",
		'id-id': "Keempat lengan Machamp bergerak cepat secara refleks melebihi kecepatan berpikir, sehingga dapat meluncurkan banyak pukulan secara sekaligus.",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "こんじょう",
				'zh-tw': "毅力",
				'th-th': "มุ่งมั่น",
				'id-id': "Nyali",
			},
			effect: {
				'ja-jp': "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
				'zh-tw': "這隻寶可夢受到招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。",
				'th-th': "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้และจะ[หมดสภาพ] ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่[หมดสภาพ] และจะอยู่บนกระดานด้วย HP ที่เหลือ [10]",
				'id-id': "Saat Pokémon ini KO karena menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak KO dan tetap berada di Arena dengan kondisi sisa HP sejumlah 10.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "マウンテンチョップ",
				'zh-tw': "山岳劈打",
				'th-th': "เมาน์เทนช็อป",
				'id-id': "Mountain Chop",
			},
			damage: 100,
			cost: ["Fighting", "Fighting"],
			effect: {
				'ja-jp': "相手の山札を上から2枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方2張卡丟棄。",
				'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
				'id-id': "Buang 2 kartu dari atas Deck lawan ke Trash.",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719510,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837352,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837353,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴーリキー",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [68],
};

export default card;
