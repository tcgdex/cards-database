import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Garchomp ex",
		'fr-fr': "Carchacrock-ex de Cynthia",
		'de-de': "Cynthias Knakrack-ex",
		'it-it': "Garchomp-ex di Camilla",
		'es-es': "Garchomp ex de Cintia",
		'pt-br': "Garchomp ex da Cíntia"
	},

	suffix: "ex",
	illustrator: "PLANETA Igarashi",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [445],
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Cynthia's Gabite",
		'fr-fr': "Carmache de Cynthia",
		'de-de': "Cynthias Knarksel",
		'it-it': "Gabite di Camilla",
		'es-es': "Gabite de Cintia",
		'pt-br': "Gabite da Cíntia",
		'es-mx': "Gabite de Cynthia"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Corkscrew Dive",
			'fr-fr': "Plongée Tire-Bouchon",
			'de-de': "Spiralsturzflug",
			'it-it': "Picchiata Rotante",
			'es-es': "Picado Tirabuzón",
			'pt-br': "Mergulho Parafuso"
	},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão."
	},

		damage: 100
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Draconic Buster",
			'fr-fr': "Buster Draconien",
			'de-de': "Drachensprenger",
			'it-it': "Distruzione del Drago",
			'es-es': "Destrucción Dracónica",
			'pt-br': "Aniquilação Dracônica"
	},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
	},

		damage: 260
	}],

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 830109,
				tcgplayer: 637613
			},
		}
	]
}

export default card
