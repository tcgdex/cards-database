import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [516],
	set: Set,

	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	description: {
		en: "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
			de: "Aquawelle",
			es: "Hidropulso",
			pt: "Pulso d'Água",
			it: "Idropulsar"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Circus Soaking",
			fr: "Cirque Trempé",
			de: "Klatschnasser Zirkus",
			es: "Circo Anegador",
			pt: "Encharcar o Circo",
			it: "Inondacirco"
		},

		damage: "60×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 60 damage for each Supporter card you find there.",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 60 dégâts pour chaque carte Supporter que vous y trouvez.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Unterstützerkarte, die du dort findest, 60 Schadenspunkte zu.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 60 puntos de daño por cada carta de Partidario que encuentres entre ellas.",
			pt: "Seu oponente revela a própria mão. Este ataque causa 60 pontos de dano para cada carta de Apoiador que encontrar lá.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 60 danni per ogni carta Aiuto presente tra quelle carte."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card