import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユンゲラー"
	},
	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		'ja-jp': "念力の威力は絶大。進化に備えて額の星にサイコパワーを蓄えている。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840596,
				tcgplayer: 647232,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ケーシィ"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "サイコドロー"
		},
		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を2枚引く。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "ちょうねんりき"
		},
		damage: 30,
		cost: ["Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [64]
}

export default card
