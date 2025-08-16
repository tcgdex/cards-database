import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		en: "Cynthia's Garchomp ex",
		fr: "Carchacrok-ex de Cynthia",
		de: "Cynthias Knakrack-ex",
		it: "Garchomp-ex di Camilla",
		es: "Garchomp ex de Cintia",
		pt: "Garchomp ex da Cíntia",
		'es-mx': "Garchomp ex de Cynthia"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Corkscrew Dive",
			fr: "Plongée Tire-Bouchon",
			de: "Spiralsturzflug",
			it: "Picchiata Rotante",
			es: "Picado Tirabuzón",
			pt: "Mergulho Parafuso",
			'es-mx': "Descenso Sacacorchos"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano."
		},

		damage: 100
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Draconic Buster",
			fr: "Buster Draconien",
			de: "Drachensprenger",
			it: "Distruzione del Drago",
			es: "Destrucción Dracónica",
			pt: "Aniquilação Dracônica",
			'es-mx': "Destructor Dracónico"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 260
	}],

	retreat: 0,
	regulationMark: "I",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card