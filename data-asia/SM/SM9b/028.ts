import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ツンデツンデ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ウルトラホールから 出現した。 複数の 生命が 積み上がり １匹を 形成している ようだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ストーンフェンス" },
			effect: {
				ja: "相手のサイドの残り枚数が3枚以下なら、このポケモンの最大HPは「200」になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やまおとし" },
			damage: 110,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の山札を上からトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558146,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [805],
};

export default card;
