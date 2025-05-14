import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		de: "Smogmog",
		'pt-br': "Weezing",
		ko: "또도가스"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Koffing"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Gas Leak",
			fr: "Fuite de Gaz"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
		fr: "Si l'un des deux Smogo se gonfle, l'autre se dégonfle.\nIls mélangent leurs gaz en permanence.",
		es: "Si uno de los gemelos Koffing se\ninfla, el otro se desinfla. Mezclan\nconstantemente sus venenosos gases.",
		it: "Se un gemello Koffing si sgonfia, l'altro si gonfia.\nI gas velenosi dei due si mischiano continuamente.",
		de: "Pumpt sich eines der zwei Smogon auf, lässt das\nandere Luft ab. So findet ein Giftgasaustausch statt.",
		'pt-br': "Se um dos gêmeos Koffing inflar, o outro\nesvazia, misturando constantemente\nseus gases venenosos.",
		ko: "한쪽이 부풀어 오르면 다른 한쪽은\n오그라드는 쌍둥이 또가스. 항상\n체내의 독가스를 섞고 있다."
	}
}

export default card
