import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "レジスチル",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "何万年も 地下の 圧力で 鍛えられた 金属の ボディは 傷ひとつ つかない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ターボアーム" },
			damage: 30,
			cost: ["Metal"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "くろがねのこぶし" },
			damage: 90,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "自分のベンチに「レジアイス」がいるなら、このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560347,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [379],
};

export default card;
