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
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Sky Attack",
			fr: "Piqué"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
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
	}
}

export default card
