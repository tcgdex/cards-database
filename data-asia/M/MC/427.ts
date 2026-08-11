import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン いしずえのめん",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "家を 支える 礎のように どっしりと 衝撃を 受け止める 守りに 秀でた 姿。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いわかぐら" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[F]エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "やまどつき" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863729,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [1017],
};

export default card;
