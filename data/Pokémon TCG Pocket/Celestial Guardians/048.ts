import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Primarina",
		fr: "Oratoria",
		es: "Primarina",
		it: "Primarina",
		de: "Primarene",
		'pt-br': "Primarina",
		ko: "누리레느"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	description: {
		en: "To Primarina, every battle is a stage. It takes down its prey with beautiful singing and dancing.",
		fr: "Pour Oratoria, le combat est une performance\nartistique. Ce Pokémon chante et danse\navec prestance pour abattre ses proies.",
		es: "Primarina considera los combates como un escenario ideal donde\nabatir a su presa con un canto y baile que derrochan elegancia.",
		it: "Per Primarina la lotta è uno show. Dà il colpo di grazia\nalla sua preda cantando e piroettando con eleganza.",
		de: "Für Primarene ist jeder Kampf wie eine Aufführung.\nEs erlegt seine Beute durch anmutiges Singen und Tanzen.",
		'pt-br': "Para Primarina, cada batalha é um palco.\nDerrota sua presa com sua dança e seu canto magníficos.",
		ko: "누리레느에게 싸움은 스테이지다.\n화려하게 노래하고 춤을 추며\n먹이의 숨통을 끊는다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Melodious Healing",
			fr: "Mélodie Médicinale",
			es: "Serenata Sanadora",
			it: "Canto Curativo",
			de: "Melodische Heilung",
			'pt-br': "Cura Melódica",
			ko: "힐 멜로디"
		},

		effect: {
			en: "Once during your turn, you may heal 30 damage from each of your {W} Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 30 dégâts de chacun de vos Pokémon {W}.",
			es: "Una vez durante tu turno, puedes curar 30 puntos de daño a cada uno de tus Pokémon {W}.",
			it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon {W} da 30 danni.",
			de: "Einmal während deines Zuges kannst du 30 Schadenspunkte bei jedem deiner {W}-Pokémon heilen.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 30 pontos de dano de cada um dos seus Pokémon {W}.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 {W}포켓몬 전원의 HP를 30회복."
		}
	}],

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			de: "Surfer",
			'pt-br': "Surfar",
			ko: "파도타기"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
