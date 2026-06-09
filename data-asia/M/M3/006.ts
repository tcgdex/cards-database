import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "相手を すくませる 眼光と 威風堂々たる その 姿から 森の君主 と 呼ばれている。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "ロイヤルコマンド"}, "damage": "20x", "cost": ["Grass"], "effect": {"ja": "自分の場のポケモンの数×20ダメージ。"}}, {"name": {"ja": "ソーラーワインダー"}, "damage": "100+", "cost": ["Grass", "Grass", "Grass"], "effect": {"ja": "自分のトラッシュに「メイのはげまし」があるなら、150ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ジャノビー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [497],

	thirdParty: {
		cardmarket: 867920,
		tcgplayer: 674325,
	},
};

export default card;