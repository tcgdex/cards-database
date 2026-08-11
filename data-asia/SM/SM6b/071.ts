import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサムGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きけんしょく" },
			effect: {
				ja: "このポケモンの残りHPが「100」以下なら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+80」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はがねのつばさ" },
			damage: 80,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ふりおろすGX" },
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、100ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559221,
			},
		},
	],

	evolveFrom: {
		ja: "ストライク",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [212],

	suffix: "GX",
};

export default card;
