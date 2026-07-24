import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "鋼の よろいを 身にまとう。 天敵の クイタランの 攻撃を 集団で 防ぎ 反撃する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきくずす" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "やまかじり" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558927,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [632],
};

export default card;
