import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "岩石も 焼けるような 灼熱の 炎を 吐いて 山火事を 起こすことが ある。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バトルセンス" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から3枚見て、その中からカードを1枚選び、手札に加える。残りのカードはトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キングブレイズ" },
			damage: "100+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分のトラッシュにある「ダンデ」の枚数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586926,
				tcgplayer: 571439,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [6],
};

export default card;
