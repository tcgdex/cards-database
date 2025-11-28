import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		it: "Moltres",
		de: "Lavados",
		'pt-br': "Moltres",
		ko: "파이어"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",

	dexId: [146],
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Sky Attack",
			fr: "Piqué",
			es: "Ataque Aéreo",
			it: "Aeroattacco",
			de: "Himmelsfeger",
			'pt-br': "Ataque do Céu",
			ko: "불새"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		},

		damage: "130"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
		fr: "Il s'agit d'un des Pokémon oiseaux légendaires.\nDes flammes rouges d'une grande beauté\nétincellent lorsqu'il bat des ailes.",
		es: "Una de las aves legendarias. Al batir las alas, las llamas\nque las envuelven emiten un hermoso fulgor rojo.",
		it: "Uno dei leggendari Pokémon alati. Quando\nsbatte le ali, le fiamme che le circondano\nbrillano di uno splendido rosso acceso.",
		de: "Schlägt dieses Legendäre Vogel-Pokémon mit\nden Flügeln, so leuchten die Flammen an seinen\nSchwingen in einem bezaubernden Rot.",
		'pt-br': "É um dos lendários Pokémon pássaro.\nQuando Moltres bate suas asas em chamas,\nsolta faíscas vermelhas brilhantes.",
		ko: "날갯짓을 하면 날개의 불꽃이\n빨갛고 아름답게 빛나는\n전설의 새포켓몬 중 1마리다."
	},

	boosters: ["charizard"]
}

export default card
