import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード"
	},
	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	description: {
		ja: "1日ずっとエサを運んでる。遭難した人がデリバードのエサで助かった話もある。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ファストギフト"
		},
		effect: {
			ja: "このワザは、先行プレイヤーの最初の番でも使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ひっぱたく"
		},
		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [225]
}

export default card
