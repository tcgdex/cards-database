import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "スカタンク",
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "尻尾から くさい 汁を 飛ばす。 お腹で 熟成させる 時間が 長いほど においが ひどくなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ベタつくえんまく" },
			damage: 50,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを2回投げる。1回でもウラなら、そのワザは失敗。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559984,
			},
		},
	],

	evolveFrom: {
		ja: "スカンプー",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [435],
};

export default card;
