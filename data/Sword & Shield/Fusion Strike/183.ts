import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Lee HyunJung",

	description: {
		en: "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph."
	},

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			de: "Metallklaue",
			es: "Garra Metal",
			pt: "Garra de Metal",
			it: "Ferrartigli"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Rock Tomb",
			fr: "Tomberoche",
			de: "Felsgrab",
			es: "Tumba Rocas",
			pt: "Tumba de Rochas",
			it: "Rocciotomba"
		},

		damage: 120,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
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