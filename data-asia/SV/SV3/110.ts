import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "キュウコン",
		'zh-tw': "九尾",
		th: "คิวคอน"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "頭が良くて 執念深い。 ふざけて しっぽを つかむと １０００年 たたられるという。",
		'zh-tw': "聰明伶俐但很會記仇。據說如果敢亂抓牠的尾巴， 牠就會纏著你作祟１０００年。",
		th: "หัวดีและมักผูกใจเจ็บ ว่ากันว่า ถ้าไปแกล้งจับหางมันเล่น จะถูกสาปแช่งไป 1000 ปี"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "おにび",
			'zh-tw': "鬼火",
			th: "ลูกไฟวิญญาณ"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "きゅうびのまい",
			'zh-tw': "九尾狐之舞",
			th: "ระบำเก้าหาง"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを9個のせる。次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在對手的1隻寶可夢身上放置9個傷害指示物。在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "วางตัวนับแดเมจ 9 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723933
	}
}

export default card