import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "アイアント",
	},

	illustrator: "Yuka Morii",
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
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [632],
	thirdParty: {
		cardmarket: 829071,
		tcgplayer: 636621,
	},
};

export default card;
