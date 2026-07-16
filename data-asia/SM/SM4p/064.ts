import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライGX",
	},

	illustrator: "PLANETA",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "リザレクション" },
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使える。このカードをベンチに出す。その後、自分のトラッシュにある[悪]エネルギーを1枚、このカードにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やみのさけめ" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "デッドエンドGX" },
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、そのポケモンをきぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560097,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [491],

	suffix: "GX",
};

export default card;
