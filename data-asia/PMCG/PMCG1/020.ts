import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Magmar",
		ja: "マグマー",
		fr: "Magmar",
		de: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				en: "Fire Punch",
				ja: "ファイアパンチ",
				fr: "Coup de feu",
				de: "Feuerstempel",
				es: "Golpe de fuego",
				it: "Fuoco Punch",
				pt: "Punch de fogo",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				en: "Flamethrower",
				ja: "火炎放射器",
				fr: "Lance-flammes",
				de: "Flammenwerfer",
				es: "Echador de llama",
				it: "Lanciafiamme",
				pt: "Lança -chamas",
			},
			effect: {
				en: "Discard 1 Fire Energy card attached to Magmar in order to use this attack.",
				ja: "この攻撃を使用するために、Magmarに取り付けられた1つの消防エネルギーカードを廃棄します。",
				fr: "Jetez 1 carte d'énergie de feu attachée à Magmar afin d'utiliser cette attaque.",
				de: "Legen Sie die an Magmar befestigten Brandenergiekarte ab, um diesen Angriff zu verwenden.",
				es: "Deseche 1 tarjeta de energía de fuego unida a Magmar para usar este ataque.",
				it: "Scartare 1 carta di energia antincendio collegata a Magmar per usare questo attacco.",
				pt: "Descarte 1 cartão de energia de incêndio anexado ao Magmar para usar esse ataque.",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};
