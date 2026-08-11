import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオキのムクホーク",
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "自分の 体が 傷つこうとも 攻撃を やめなくなった。 トサカの 形を 気にしている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "からげんき" },
			damage: "60+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンがどくまたはやけどなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "フェザーストライク" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863894,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アオキのムクバード",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [398],
};

export default card;
