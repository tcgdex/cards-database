import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チルタリス",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'ja-jp': "晴れた日 綿雲に まぎれながら 大空を 自由に 飛び回り 美しい ソプラノで 歌う。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たたかいのうた" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分の[竜]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559297,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チルット",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [334],
};

export default card;
