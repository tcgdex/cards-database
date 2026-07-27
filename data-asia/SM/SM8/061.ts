import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサム",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "ひとたび 敵と 認識すると 鋼鉄の 硬度を 持つ ハサミで 容赦なく 叩き潰す。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいからだ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スペシャルブロー" },
			damage: "60+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに特殊エネルギーがついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558700,
			},
		},
	],

	evolveFrom: {
		ja: "ストライク",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [212],
};

export default card;
