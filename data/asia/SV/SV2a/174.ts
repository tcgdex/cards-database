import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドキング",
		'zh-tw': "尼多王",
		'th-th': "นิโดคิง",
		'id-id': "Nidoking",
	},

	illustrator: "Misaki Hashimoto",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'ja-jp': "力自慢の ポケモン。 太い 尻尾と ダイヤをも 砕く ツノを 駆使して 豪快に 戦う。",
		'zh-tw': "以力氣為傲的寶可夢。會善用粗壯的尾巴和連鑽石也能擊碎的角，豪邁地戰鬥。",
		'th-th': "เป็นโปเกมอนที่ภาคภูมิใจในพละกำลัง ใช้หางอ้วน ๆ กับเขาที่ทุบบดแม้กระทั่งเพชรได้อย่างชำนาญ และต่อสู้อย่างฮึกเหิม",
		'id-id': "Pokémon yang bangga pada kekuatannya. Nidoking menggunakan ekornya yang tebal dan tanduknya yang mampu menghancurkan intan sekalipun secara maksimal untuk bertarung dengan penuh antusias.",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "はりきりキング",
				'zh-tw': "活力王者",
				'th-th': "ราชาฮึกเหิม",
				'id-id': "Raja Antusias",
			},
			effect: {
				'ja-jp': "自分の場に「ニドクイン」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "若自己的場上有「尼多后」，則這隻寶可夢使用招式所需的能量全部消除。",
				'th-th': "ถ้าบนกระดานฝ่ายเรามี [นิโดควีน] อยู่ พลังงานสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้ ทั้งหมดจะหายไป",
				'id-id': "Jika ada Nidoqueen di Arena sendiri, Pokémon ini menjadi tidak membutuhkan Energi untuk menggunakan serangan.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ベノムインパクト",
				'zh-tw': "毒液衝撞",
				'th-th': "เวนอมอิมแพกต์",
				'id-id': "Venom Impact",
			},
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
				'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719627,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニドリーノ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [34],
};

export default card;
