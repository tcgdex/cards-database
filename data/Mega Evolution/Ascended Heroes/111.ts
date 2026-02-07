import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [445],

	name: {
		en: "Cynthia's Garchomp ex",
		fr: "Carchacrock-ex de Cynthia",
		es: "Garchomp ex de Cintia",
		'es-mx': "Garchomp ex de Cynthia",
		de: "Cynthias Knakrack-ex",
		it: "Garchomp-ex di Camilla",
		pt: "Garchomp ex da Cíntia"
	},

	illustrator: "5ban Graphics",
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
			es: "Picado Tirabuzón",
			'es-mx': "Descenso Sacacorchos",
			de: "Spiralsturzflug",
			it: "Picchiata Rotante",
			pt: "Mergulho Parafuso"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão."
		},

		damage: 100
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Draconic Buster",
			fr: "Buster Draconien",
			es: "Destrucción Dracónica",
			'es-mx': "Destructor Dracónico",
			de: "Drachensprenger",
			it: "Distruzione del Drago",
			pt: "Aniquilação Dracônica"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon."
		},

		damage: 260
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675923,
		cardmarket: 869722
	}
}

export default card