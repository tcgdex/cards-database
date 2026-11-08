import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Rocket's Scizor Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [212],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デュアルアーマー",
			},
			effect: {
				'ja-jp': "Rocket's Scizor Exがそれに金属エネルギーが付いている限り、Rocket's Scizor Exは闇と金属タイプの両方です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "回転爪",
			},
			effect: {
				'ja-jp': "Rocket's Scizor Exに取り付けられたエネルギーカードを捨てることができます。そうした場合は、廃棄パイルを検索して、エネルギーカード（廃棄したものを除く）を検索し、Rocket's Scizor Exに取り付けます。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
