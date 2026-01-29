import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "鋼の よろいを 身にまとう。 天敵の クイタランの 攻撃を 集団で 防ぎ 反撃する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いっしょにかむ" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチに「アイアント」がいるなら、20ダメージ追加。",
			},
		},
		{ name: { ja: "はさむ" }, damage: 50, cost: ["Metal", "Colorless"] },
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [632],
	thirdParty: {
		cardmarket: 829508,
		tcgplayer: 636702,
	},
};

export default card;
