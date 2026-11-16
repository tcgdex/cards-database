import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "マッスグマ"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [264],
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ジグザグマ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "さがしだす"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び出し、手札に加える。その後、その山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "れんぞくずつき"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ続け、その間に出たオモテ×40ダメージ。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784522,
				tcgplayer: 613071,
				cardtrader: 138022,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784522,
				tcgplayer: 613071,
				cardtrader: 138022,
			},
		},
	]
}

export default card
