import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゲノセクトGX",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ダブルカセット" },
			effect: {
				'ja-jp': "このポケモンは、「ポケモンのどうぐ」を2枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）",
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
				'ja-jp': "このワザのダメージは抵抗力を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558952,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [649],

	suffix: "GX",
};

export default card;
