import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガ&ゾロアークGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あくのはどう" },
			damage: "30+",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[悪]エネルギーの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ナイトユニゾンGX" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある[悪]タイプの「ポケモンGX・EX」を2枚、ベンチに出す。 追加でエネルギーが1個ついているなら、新しく出したポケモンに、トラッシュにあるエネルギーを2枚ずつつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558245,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [658, 571],

	suffix: "TAG TEAM-GX",
};

export default card;
