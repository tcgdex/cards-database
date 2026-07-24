import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるアルセウス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しんわのまもり" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アルティメットアロー" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560217,
			},
		},
	],

	retreat: 2,
	rarity: "Shiny Ultra Rare",
	dexId: [493],
};

export default card;
