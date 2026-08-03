import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のワナイダー",
	},

	illustrator: "NC Empire",
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
			type: "holo",
			thirdParty: {
				cardmarket: 821931,
				tcgplayer: 629040,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のタマンチュラ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [918],
};

export default card;
