import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カスミのコダック",
		'zh-tw': "<小霞的>可達鴨",
		'zh-cn': "<小霞的>可達鴨"
	},

	illustrator: "OKACHEKE",
	rarity: "None",
	category: "Pokemon",
	dexId: [54],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。",
		'zh-tw': "一直受到頭痛的困擾。 當頭痛欲裂時， 就會開始使用神奇的力量。",
		'zh-cn': "一直受到頭痛的困擾。 當頭痛欲裂時， 就會開始使用神奇的力量。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どたばたジャンプ",
			'zh-tw': "重步跳躍",
			'zh-cn': "重步跳躍"
		},

		effect: {
			ja: "このポケモンがベンチにいるなら、自分の番に1回使える。自分の山札を下から1枚トラッシュする。その後、このポケモンについているカードをすべてトラッシュし、このポケモンを山札の上にもどす。",
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將自己的牌庫下方1張卡丟棄。然後，將這隻寶可夢身上附加的卡全部丟棄，將這隻寶可夢放回牌庫上方。",
			'zh-cn': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將自己的牌庫下方1張卡丟棄。然後，將這隻寶可夢身上附加的卡全部丟棄，將這隻寶可夢放回牌庫上方。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "うちみず",
			'zh-tw': "潑灑清水",
			'zh-cn': "潑灑清水"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card