import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キルリア"
	},
	illustrator: "satoma",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	description: {
		'ja-jp': "サイコパワーを操りまわりの空間をねじ曲げることで未来を見通すことができる。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840600,
				tcgplayer: 647214,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラルトス"
	},
	attacks: [{
		name: {
			'ja-jp': "コールサイン"
		},
		effect: {
			'ja-jp': "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		},
		cost: ["Psychic"]
	}, {
		name: {
			'ja-jp': "サイコショット"
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
	rarity: "Common",
	dexId: [281]
}

export default card
