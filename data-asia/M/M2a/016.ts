import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のワナイダー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "チャージアップ" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ロケットラッシュ" },
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の場の「ロケット団のポケモン」の数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861494,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861554,
			},
		},
		{
			type: "reverse",
			foil: "team-rocket",
			thirdParty: {
				cardmarket: 861555,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のタマンチュラ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [918],
};

export default card;
