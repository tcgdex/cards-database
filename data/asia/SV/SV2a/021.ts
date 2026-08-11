import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニスズメ",
		'zh-tw': "烈雀",
		'th-th': "โอนิสึซึเมะ",
		'id-id': "Spearow",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "羽が 短く 長い 距離を 飛べない。 せわしなく 動き まわって むしポケモンを ついばむ。",
		'zh-tw': "翅膀很短，無法長距離飛行。 總是不停地四處跳來跳去， 忙著啄食蟲寶可夢。",
		'th-th': "ด้วยปีกที่สั้นทำให้บินได้ไม่ไกล มักขยับไปมาอย่างลุกลี้ลุกลนจิกกินโปเกมอนแมลง",
		'id-id': "Spearow tidak dapat terbang jauh karena sayapnya pendek. Pokémon ini bergerak ke sekeliling dengan tergesa-gesa untuk mencari dan mematuk Pokémon serangga.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ぬけがけしんか",
				'zh-tw': "搶先進化",
				'th-th': "ชิงวิวัฒนาการ",
				'id-id': "Evolusi Mencuri Start",
			},
			effect: {
				'ja-jp': "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
				'zh-tw': "若在後攻玩家的最初回合，則這隻寶可夢就算剛使出也可進化。",
				'th-th': "โปเกมอนนี้ ถ้าเป็นเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลัง แม้จะเพิ่งออกมาก็สามารถวิวัฒนาการได้",
				'id-id': "Jika ini adalah giliran pertama Pemain Kedua, Pokémon ini dapat dievolusikan meskipun baru dimasukkan.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "スピードひこう",
				'zh-tw': "高速飛行",
				'th-th': "บินเร็วจี๋",
				'id-id': "Terbang Cepat",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719463,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837264,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837265,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [21],
};

export default card;
