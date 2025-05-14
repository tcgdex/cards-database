import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		es: "Pidgeot",
		it: "Pidgeot",
		de: "Tauboss",
		'pt-br': "Pidgeot",
		ko: "피죤투"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",
	evolveFrom: {
		en: "Pidgeotto"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off",
			fr: "Déroute"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
		fr: "Il survole la surface de l'eau pour repérer\nune proie et plonge en piqué pour l'attraper.",
		es: "Cuando caza, vuela muy deprisa a ras del agua\ny sorprende a inocentes presas como Magikarp.",
		it: "Quando caccia, vola velocissimo sul pelo dell'acqua\ne cattura ignare prede come Magikarp.",
		de: "Dieses Pokémon schnellt bei der Jagd blitzschnell\nunter Wasser, um seine ahnungslose Beute zu fangen.",
		'pt-br': "Quando caça, bate na superfície da água em\nalta velocidade para capturar presas desavisadas,\ncomo Magikarp.",
		ko: "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다."
	}
}

export default card
