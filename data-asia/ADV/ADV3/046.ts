import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "サラメンス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [373],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ドラゴン風",
			},
			effect: {
				ja: "ターン中（攻撃の前に）、サラマンスがアクティブなポカモンである場合、敵のベンチポカモンの1つを防御するポカンと交換することができます。対戦相手は、防御するポカモンを選択して切り替えます。サラメンスが特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にサラメンスに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Water", "Colorless", "Colorless"],
			name: {
				ja: "ドラゴンクロー",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
