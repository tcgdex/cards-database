import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Arcanine",
		ja: "アルカニン",
		fr: "Arcanine",
		de: "Arcanine",
		es: "Arcanina",
		it: "Arcanina",
		pt: "Arcanine",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
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
				en: "Discard 1 Fire Energy card attached to Arcanine or this attack does nothing.",
				ja: "アルカニンに取り付けられた1つの消防エネルギーカードを廃棄すると、この攻撃は何もしません。",
				fr: "Jetez 1 carte d'énergie de feu attachée à l'arcanine ou cette attaque ne fait rien.",
				de: "Mit Arcanine befestigte Brandenergiekarte verwerfen oder dieser Angriff nichts bewirken.",
				es: "Deseche 1 Tarjeta de energía de fuego unida a Arcanine o este ataque no hace nada.",
				it: "Scartare 1 carta di energia antincendio attaccata all'arcanina o questo attacco non fa nulla.",
				pt: "Descarte 1 cartão de energia de incêndio ligado à arcanina ou esse ataque não faz nada.",
			},
			damage: 50,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				en: "Take Down",
				ja: "降ろす",
				fr: "Démonter",
				de: "Notieren",
				es: "Derribar",
				it: "Prendere nota",
				pt: "Derrubar",
			},
			effect: {
				en: "Arcanine does 30 damage to itself.",
				ja: "アルカニンはそれ自体に30のダメージを与えます。",
				fr: "L'arcanine se fait 30 dégâts.",
				de: "Arcanine schädigt sich 30.",
				es: "Arcanine hace 30 daños a sí mismo.",
				it: "L'arcanina fa 30 danni a se stesso.",
				pt: "Arcanine causa 30 danos a si mesmo.",
			},
			damage: 80,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};
