import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Groudon Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "古代のマーク",
			},
			effect: {
				ja: "Groudon Exがあなたのアクティブなポカモンである限り、各プレイヤーのKyogre ExとRayquaza Exは攻撃できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "岩の転倒",
			},
			effect: {
				ja: "この攻撃の損傷は、抵抗の影響を受けません。",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "マントルを粉砕します",
			},
			effect: {
				ja: "あなたはあなたが好きなだけ多くのエネルギーカードをあなたの手から捨てることができます。そうした場合、この攻撃は50のダメージと、廃棄した各エネルギーカードに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
