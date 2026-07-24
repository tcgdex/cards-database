import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー&アローラナッシーGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スーパーグロウ" },
			cost: [],
			effect: {
				ja: "自分の場の[草]ポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。進化後が1進化なら、続けて2進化を1枚選び進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "やすらぎハリケーン" },
			damage: 150,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "トロピカルアワーGX" },
			damage: 200,
			cost: ["Grass", "Grass", "Grass"],
			effect: {
				ja: "追加でエネルギーが3個ついているなら、相手の場のポケモンについているエネルギーを、すべて山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557257,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [722, 103],

	suffix: "TAG TEAM-GX",
};

export default card;
