import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルカセット" },
			effect: {
				ja: "このポケモンは、「ポケモンのどうぐ」を2枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "さくれつだん" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
		},
		{
			name: { ja: "ブレイクバスターGX" },
			damage: 190,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558958,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [649],

	suffix: "GX",
};

export default card;
