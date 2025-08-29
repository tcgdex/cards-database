import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surge's Magneton中t",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "エネルギー電荷",
			},
			effect: {
				ja: "ターン中に好きなように（攻撃の前）</em> </em>、SurgeのMagneton中tがあなたのアクティブなPokmonである場合、Pokmonの1つに1つのLightning Energyカードを取り付けて、Surgeのマグネトン中Lに取り付けることができます。 Surgeのマグネトン中tが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "メガショック",
			},
			effect: {
				ja: "コインをひっくり返します。 Tailsの場合、SurgeのMagneton中tはそれ自体に20のダメージを与えます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
