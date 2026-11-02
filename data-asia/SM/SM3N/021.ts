import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "弾力のある 体の 中に 行き場のない 魂を 取りこんで あの世に 連れていくと 言われる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やみのしょうたいじょう" },
			effect: {
				ja: "自分の番に1回使える。相手の手札を見て、その中にあるたねポケモンを1枚、相手のベンチに出す。その後、そのポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マインドジャック" },
			damage: "30+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561021,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [477],
};

export default card;
