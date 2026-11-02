import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かけぬける" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "オーロラホーン" },
			damage: 120,
			cost: ["Fairy", "Fairy", "Colorless"],
		},
		{
			name: { ja: "サンクチュアリGX" },
			cost: ["Fairy", "Fairy", "Colorless"],
			effect: {
				ja: "自分のポケモン全員にのっているダメカンをすべて、相手のバトルポケモンにのせ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559643,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [716],

	suffix: "GX",
};

export default card;
