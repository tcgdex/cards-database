import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		it: "Sprigatito",
		de: "Felori",
		'pt-br': "Sprigatito",
		ko: "나오하"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
		fr: "Ce Pokémon lave assidûment son visage pour\néviter qu'il ne s'assèche. La composition de son\npelage soyeux est proche de celle des plantes.",
		es: "Su sedoso pelaje se asemeja en composición a las plantas.\nSe lava la cara con diligencia para que no se le seque.",
		it: "Il suo pelo vellutato ha una composizione simile a quella delle\npiante. Si lava il muso di frequente per evitare che si disidrati.",
		de: "Die Zusammensetzung seines weichen Fells ähnelt\nder von Pflanzen. Es reinigt penibel sein Gesicht,\num zu verhindern, dass dieses austrocknet.",
		'pt-br': "A composição de seu pelo fofinho é semelhante\nà das plantas. Este Pokémon lava o rosto frequentemente\npara evitar que fique ressecado.",
		ko: "복슬복슬한 털은 식물에 가까운 성분으로\n이루어져 있다. 수시로 세수를 하면서\n건조해지는 것을 방지한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cry for Help",
			fr: "Appel au secours",
			es: "Pedir Ayuda",
			it: "Gridaiuto",
			de: "Hilfeschrei",
			'pt-br': "Pedir Ajuda",
			ko: "친구부르기"
		},

		cost: ["Grass"],

		effect: {
			en: "Put 1 random {G} Pokémon from your deck into your hand.",
			fr: "Ajoutez au hasard un Pokémon {G} de votre deck à votre main.",
			es: "Pon 1 Pokémon {G} aleatorio de tu baraja en tu mano.",
			it: "Prendi un Pokémon {G} a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
			de: "Nimm 1 zufälliges {G}-Pokémon aus deinem Deck auf deine Hand.",
			'pt-br': "Coloque 1 Pokémon {G} aleatório do seu baralho na sua mão.",
			ko: "자신의 덱에서 {G}포켓몬을 랜덤으로 1장 패로 가져온다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
