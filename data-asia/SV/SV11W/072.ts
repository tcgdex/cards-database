import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ヨーテリー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "強い 相手にも 勇敢に 立ち向かうが 不利な 戦いを 避ける 知能の 高い ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゃれつく" },
			damage: "10+",
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、20ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [506],
};

export default card;
