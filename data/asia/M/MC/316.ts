import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アグノム",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マインドキネシス" },
			damage: "10+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863618,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [482],
};

export default card;
