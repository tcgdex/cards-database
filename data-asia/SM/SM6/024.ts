import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "アマルルガ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "ひし形の 結晶で 氷の 壁を 瞬間的に 作り 敵の 攻撃を 防ぐのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "フロストウォール" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ブリザードバーン" },
			damage: 150,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559569,
			},
		},
	],

	evolveFrom: {
		ja: "アマルス",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [699],
};

export default card;
