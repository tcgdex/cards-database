import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロゼリア",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "花の 香りを かぐと 気持ちが リラックスする。 香りの 強い ロゼリアは 元気な 証拠。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リーフステップ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863321,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [315],
};

export default card;
