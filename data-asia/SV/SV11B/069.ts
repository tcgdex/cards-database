import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルシグナル" },
			effect: {
				ja: "自分の番に1回使える。自分の山札からタイプの進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "プロテクトチャージ" },
			damage: 150,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [649],

	suffix: "EX",

	thirdParty: {
		cardmarket: 828602,
		tcgplayer: 636423,
	},
};

export default card;
