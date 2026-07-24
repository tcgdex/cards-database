import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドラン♀",
		'zh-tw': "尼多蘭",
		th: "นิโดรัน♀",
		id: "Nidoran♀",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "硬い 前歯で 木の実を 砕いて 食べる。 ツノの 先は オスより 少し 丸みを 帯びている。",
		'zh-tw': "會用堅硬的門牙咬碎樹果後吃下。角的尖端 會比雄性還要圓一些。",
		th: "ใช้ฟันหน้าที่สุดแข็งกะเทาะผลไม้และกัดกิน ปลายเขานั้นมีความมนกลมมากกว่าตัวผู้",
		id: "Nidoran betina menggunakan gigi depannya yang keras untuk mengunyah hancur beri dan memakannya. Ujung tanduknya lebih membulat daripada yang jantan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どくのつの",
				'zh-tw': "毒角",
				th: "เขาพิษ",
				id: "Tanduk Beracun",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
				id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719471,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837279,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837280,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [29],
};

export default card;
