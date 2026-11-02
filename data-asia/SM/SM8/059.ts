import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "バンギラスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロストアウト" },
			effect: {
				ja: "このポケモンのワザのダメージで、相手のポケモンがきぜつしたなら、そのポケモンと、ついているすべてのカードはトラッシュせず、ロストゾーンに置く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あばれさじん" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のベンチのたねポケモン全員にも、それぞれ30ダメージ。[ベンチは弱点・抵抗力を計算しない。]",
			},
		},
		{
			name: { ja: "スマックダウンGX" },
			damage: 220,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558698,
			},
		},
	],

	evolveFrom: {
		ja: "サナギラス",
	},

	retreat: 3,
	rarity: "Double rare",
	dexId: [248],

	suffix: "GX",
};

export default card;
