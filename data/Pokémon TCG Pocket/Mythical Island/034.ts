import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Elgyem",
		fr: "Lewsor",
		es: "Elgyem",
		it: "Elgyem",
		de: "Pygraulon",
		'pt-br': "Elgyem",
		ko: "리그레"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.",
		fr: "S'il se tient près d'une télé, d'étranges panoramas\napparaissent à l'écran. On raconte qu'il s'agirait\nde paysages venus des terres natales de Lewsor.",
		es: "Cuando se halla junto a un televisor, la pantalla\nmuestra imágenes de extraños paisajes. Se cree\nque corresponden a su lugar de origen.",
		it: "Quando si trova vicino a un televisore, sullo\nschermo appaiono paesaggi singolari. Si dice\nche siano vedute del luogo da cui proviene.",
		de: "Wenn es in der Nähe ist, beginnen Fernseher zu\nflackern und fremdartige Landschaften zu zeigen.\nDiese stellen angeblich seine Heimat dar.",
		'pt-br': "Se este Pokémon estiver próximo a uma televisão,\npaisagens estranhas aparecerão na tela. Dizem que essas\nimagens são do seu lar.",
		ko: "TV 근처에 있으면 모니터에\n기묘한 풍경이 비친다.\n리그레의 고향이라 여겨지고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
