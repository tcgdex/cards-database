import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "古代人の お城の 壁には ゴルーグが ビームを 撃つための 砲台の ような 台座が ある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "てっぺき" },
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "とうしのこぶし" },
			damage: "120+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex・V」なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752801,
				tcgplayer: 568370,
			},
		},
	],

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [623],
};

export default card;
