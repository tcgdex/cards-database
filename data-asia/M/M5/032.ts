import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "捨てられた ぬいぐるみに おんねんが 宿り ポケモンになった。 自分を 捨てた 子供を 捜している。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ばけがくれ" },
			effect: {
				ja: "このポケモンは、相手のワザや特性の効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "にんぎょうキャッチ" },
			damage: 80,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888275,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [354],
};

export default card;
