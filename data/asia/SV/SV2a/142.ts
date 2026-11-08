import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プテラ",
		'zh-tw': "化石翼龍",
		'th-th': "พเทอรา",
		'id-id': "Aerodactyl",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "のこぎりの ような キバは はがねポケモンの 皮膚さえ ズタズタに 切り裂いてしまう。",
		'zh-tw': "擁有像鋸子般的牙齒，就連鋼屬性寶可夢的 皮膚都能撕裂成碎片。",
		'th-th': "ฟันเขี้ยวดุจใบเลื่อยนั้นแม้จะเป็นผิวของโปเกมอนโลหะก็สามารถกัดฉีกเป็นชิ้น ๆ ได้",
		'id-id': "Taring Aerodactyl yang bagaikan gergaji dapat mengoyak dan menyayat kulit Pokémon logam sekalipun.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かっくう",
				'zh-tw': "滑翔",
				'th-th': "ถลาลม",
				'id-id': "Melayang Rendah",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "たいかこうせん",
				'zh-tw': "退化光線",
				'th-th': "ลำแสงย้อนวิวัฒนาการ",
				'id-id': "Sinar Degradasi",
			},
			damage: 100,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
				'zh-tw': "從對手的進化的戰鬥寶可夢身上，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。",
				'th-th': "ถอด [การ์ดวิวัฒนาการ] 1 ใบออกจากโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่วิวัฒนาการแล้ว และทำให้วิวัฒนาการย้อนกลับ การ์ดที่ถอดออกมา นำกลับขึ้นมือฝ่ายตรงข้าม",
				'id-id': "Turunkan tingkat evolusi Pokémon Bertarung lawan yang telah berevolusi dengan melepas 1 kartu evolusi yang dikenakan. Kartu yang dilepas dikembalikan ke Kartu Pegangan lawan.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719595,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837508,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837509,
			},
		},
	],

	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [142],
};

export default card;
