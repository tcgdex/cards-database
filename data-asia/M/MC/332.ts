import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーを 出し続けていると ニャオニクスの 肉体にも ダメージが およぶ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さそうしっぽ" },
			effect: {
				ja: "自分の番に、自分の手札から「のんびりじゃらし」を1枚トラッシュするなら、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコショット" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863634,
			},
		},
	],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [678],
};

export default card;
