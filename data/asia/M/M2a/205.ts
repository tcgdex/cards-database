import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のミミッキュ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほうせきごっこ" },
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトル場の「テラスタル」のポケモンが持つワザを1つ選び、このワザとして使う。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861448,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [778],
};

export default card;
