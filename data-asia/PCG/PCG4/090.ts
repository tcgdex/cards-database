import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Lugia Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [249],
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "銀の輝き",
			},
			effect: {
				ja: "Lugia Exがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Lugia Exがノックアウトされたとしても）、コインをひっくり返します。頭の場合は、攻撃するポカモンに取り付けられたエネルギーカードを選択し、相手の手に返します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Water", "Lightning"],
			name: {
				ja: "エレメンタルブラスト",
			},
			effect: {
				ja: "Lugia Exに取り付けられた火エネルギー、水エネルギー、稲妻エネルギーを廃棄します。",
			},
			damage: 200,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
