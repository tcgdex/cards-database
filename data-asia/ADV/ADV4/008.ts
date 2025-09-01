import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Bellossom",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [182],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ダンスを癒します",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、Pokã©Monの1つから2つのダメージカウンターを削除できます。ターンごとに1つ以上のヒールダンスポカを使用することはできません。 Bellossomが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ミラクルパウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。防御ポケモンは現在、その特別な状態の影響を受けています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "SolarBeam",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
