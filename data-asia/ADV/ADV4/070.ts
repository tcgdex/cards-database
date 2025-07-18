import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		en: "Metang",
		ja: "メタン",
		fr: "Métang",
		de: "Metang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [375],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Metal Load",
				ja: "金属負荷",
				fr: "Charge métallique",
				de: "Metalllast",
				es: "Carga de metal",
				it: "Carico in metallo",
				pt: "Carga de metal",
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Metang.",
				ja: "廃棄物の山を検索して、金属エネルギーカードを添付し、それをメタンに取り付けます。",
				fr: "Recherchez votre tas de défausse pour une carte d'énergie métallique et fixez-la à Metang.",
				de: "Suchen Sie Ihren Ablagerungsstapel nach einer Metall -Energiekarte und befestigen Sie sie an Metang.",
				es: "Busque en su pila de descarte una tarjeta de energía de metal y colóquela a Metang.",
				it: "Cerca al tuo mucchio di scarti una scheda di energia metallica e attaccalo a Metang.",
				pt: "Pesquise sua pilha de descarte para obter um cartão de energia de metal e anexe -a ao Metang.",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				en: "Metal Claw",
				ja: "金属爪",
				fr: "Griffe métallique",
				de: "Metallklaue",
				es: "Garra de metal",
				it: "Artiglio di metallo",
				pt: "Garra de metal",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
