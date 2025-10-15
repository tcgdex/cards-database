import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ハハコモリ",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "小さい ポケモンを 見つけると 腕の カッターと 粘着糸で 葉っぱの 服を 縫う 習性。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "いやしのおくるみ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のたねポケモン全員のHPを、それぞれ「100」回復する。",
			},
		},
		{
			name: { ja: "シザークロス" },
			damage: "90+",
			cost: ["Grass", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、40ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "クルマユ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [542],
};

export default card;
