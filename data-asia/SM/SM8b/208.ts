import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "グソクムシャGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "であいがしら" },
			damage: "30+",
			cost: ["Grass"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "アーマープレス" },
			damage: 100,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "ザンクロスGX" },
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551536,
			},
		},
	],

	evolveFrom: {
		ja: "コソクムシ",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [768],

	suffix: "GX",
};

export default card;
