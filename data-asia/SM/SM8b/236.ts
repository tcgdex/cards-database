import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ツンデツンデGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ウルトラウォール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「ウルトラビースト」全員が、相手のポケモンから受けるワザのダメージは「-10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ギガトンスタンプ" },
			damage: 120,
			cost: ["Metal", "Metal", "Colorless"],
		},
		{
			name: { ja: "レイGX" },
			damage: "50+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "自分がすでにとったサイドの枚数x50ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551676,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [805],

	suffix: "GX",
};

export default card;
