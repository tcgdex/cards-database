import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ルギアGX",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "わだつみのやいば" },
			damage: 170,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「わだつみのやいば」が使えない。",
			},
		},
		{
			name: { ja: "ロストパージGX" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンと、ついているすべてのカードを、ロストゾーンに置く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558739,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [249],

	suffix: "GX",
};

export default card;
