import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸",
		th: "ยาดง",
		id: "Slowpoke",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "動きが のろく 間抜け。 叩かれても ５秒 たってから 痛さを 感じるほどだ。",
		'zh-tw': "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒 才會感受到疼痛。",
		th: "อืดอาดและซื่อบื้อ ถึงขั้นว่าถูกตีไป 5 วินาทีถึงเพิ่งรู้สึกเจ็บ",
		id: "Slowpoke lamban dan lemot. Pokémon ini baru merasakan rasa sakit akibat dipukul setelah 5 detik berlalu.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かいすいよく",
				'zh-tw': "海水浴",
				th: "เล่นน้ำทะเล",
				id: "Mandi Air Laut",
			},
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP，特殊狀態也全部恢復。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [30] รักษาสภาวะผิดปกติทั้งหมดด้วย",
				id: "Pulihkan HP Pokémon ini sejumlah 30, lalu pulihkan juga semua Kondisi Khusus yang dialami Pokémon ini.",
			},
		},
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
				th: "พุ่งหัวชน",
				id: "Tandukan Kepala",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719521,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837386,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837387,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [79],
};

export default card;
