import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライドン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [112],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "電力拡散",
			},
			effect: {
				ja: "Rhydonがあなたのアクティブなポカモンである限り、あなたのすべてのベンチされたPokã©Monへの攻撃によってすべての損傷を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ホーンドリル",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ハイパーテール",
			},
			effect: {
				ja: "防御するポケモンにポケパワーまたはポケボディがある場合、この攻撃は50のダメージと20のダメージを与えます。",
			},
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
