import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [46],
	set: Set,

	name: {
		fr: "Paras",
		en: "Paras",
		es: "Paras",
		it: "Paras",
		pt: "Paras",
		de: "Paras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Boule de Spores",
			en: "Spore Ball",
			es: "Bola Espora",
			it: "Pallaspore",
			pt: "Bola de Esporos",
			de: "Sporenbällchen"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 733641
	}
}

export default card