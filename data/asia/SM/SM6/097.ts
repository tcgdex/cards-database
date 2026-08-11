import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタルGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せいきをすいとる" },
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "イビルソニック" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "デスカウントGX" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンにダメカンが4個のっているなら、そのポケモンをきぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559642,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [717],

	suffix: "GX",
};

export default card;
