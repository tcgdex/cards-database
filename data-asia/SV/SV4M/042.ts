import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "アイアント",
		'zh-tw': "鐵蟻",
		th: "ไอแอนท์",
		ko: "아이앤트"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [632],
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "大きな顎は 岩石をも かみ砕く。 サダイジャから タマゴを 守るため 群れで 戦う。",
		'zh-tw': "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。",
		th: "กรามใหญ่นี้แม้จะเป็นหินก็กัดบดจนแหลกได้ ต่อสู้กันเป็นฝูงเพื่อปกป้องไข่จากซาไดจา",
		ko: "큰 턱은 암석도 깨물어 부순다. 사다이사로부터 알을 지키기 위해 무리 지어 싸운다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "むらがるいかり",
			'zh-tw': "憤怒堆積",
			th: "กรูกันพิโรธ",
			ko: "모여드는분노"
		},

		damage: "20×",

		effect: {
			ja: "自分の場の「アイアント」全員にのっているダメカンの数×20ダメージ。",
			'zh-tw': "造成自己的場上的所有「鐵蟻」身上放置的傷害指示物數量×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บน [ไอแอนท์] บนกระดานฝ่ายเราทุกตัว x20",
			ko: "자신의 필드의 「아이앤트」 전원에게 올려져 있는 데미지 카운터의 수 × 20데미지를 준다."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ハードシザー",
			'zh-tw': "堅硬之剪",
			th: "ฮาร์ดซิสเซอร์",
			ko: "하드시저"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지는 「-20」이 된다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741869
	}
}

export default card