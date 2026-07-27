import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "マリルリ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	description: {
		ja: "お腹の 泡のような 模様は 水の 中で 自分の 姿を カモフラージュ してくれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みずたまさがし" },
			cost: ["Fairy"],
			effect: {
				ja: "自分の山札を上から8枚見て、その中にあるエネルギーを好きなだけ、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "じゃれつく" },
			damage: "60+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558702,
			},
		},
	],

	evolveFrom: {
		ja: "マリル",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [184],
};

export default card;
