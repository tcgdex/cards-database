import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルド",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "王の 素質を 持つ 人間を 見抜くらしい。 認められた 人は やがて 王になると 言われている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロイヤルガード" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-40」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シールドバッシュ" },
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558618,
			},
		},
	],

	evolveFrom: {
		ja: "ニダンギル",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [681],
};

export default card;
