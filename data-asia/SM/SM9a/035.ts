import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲチック",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		ja: "優しい人の そばに いないと 元気が 出なくなってしまう。 羽を動かさずに 空に浮かべる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エネギフト" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札にあるエネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "マジカルショット" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558222,
			},
		},
	],

	evolveFrom: {
		ja: "トゲピー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [176],
};

export default card;
