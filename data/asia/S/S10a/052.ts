import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "鐘の音の如き 声色にて 鳴けば 異界へと 通じる 穴 開くと 言われ 古来より 神として 奉られたり。",
		'zh-tw': "據說當牠發出鐘聲般的音色時，通往異界的洞穴便會開啟。 自古就被視為神而受到供奉。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "じゅうりょくおとし",
				'zh-tw': "重力墜擊",
			},
			damage: "40+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×40ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656375,
				tcgplayer: 570715,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577126,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
