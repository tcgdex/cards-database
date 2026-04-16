import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青綿鳥",
		'zh-cn': "青綿鳥",
		ja: "チルット"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "如果自己和周圍不乾淨， 就靜不下心來的性格。 見到髒污會用羽毛擦掉。",
		'zh-cn': "如果自己和周圍不乾淨， 就靜不下心來的性格。 見到髒污會用羽毛擦掉。",
		ja: "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "魅惑之聲",
			'zh-cn': "魅惑之聲",
			ja: "チャームボイス"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [333],

	thirdParty: {
		cardmarket: 787608
	}
}

export default card