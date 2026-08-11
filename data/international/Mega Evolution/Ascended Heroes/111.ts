import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Garchomp ex",
		'fr-fr': "Carchacrock-ex de Cynthia",
		'es-es': "Garchomp ex de Cintia",
		'es-mx': "Garchomp ex de Cynthia",
		'de-de': "Cynthias Knakrack-ex",
		'it-it': "Garchomp-ex di Camilla",
		'pt-br': "Garchomp ex da Cíntia"
	},

	evolveFrom: {
		'en-us': "Cynthia's Gabite",
		'fr-fr': "Carmache de Cynthia",
		'es-es': "Gabite de Cintia",
		'es-mx': "Gabite de Cynthia",
		'de-de': "Cynthias Knarksel",
		'it-it': "Gabite di Camilla",
		'pt-br': "Gabite da Cíntia",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Corkscrew Dive",
			'fr-fr': "Plongée Tire-Bouchon",
			'es-es': "Picado Tirabuzón",
			'es-mx': "Descenso Sacacorchos",
			'de-de': "Spiralsturzflug",
			'it-it': "Picchiata Rotante",
			'pt-br': "Mergulho Parafuso"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'es-mx': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão."
		},

		damage: 100
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Draconic Buster",
			'fr-fr': "Buster Draconien",
			'es-es': "Destrucción Dracónica",
			'es-mx': "Destructor Dracónico",
			'de-de': "Drachensprenger",
			'it-it': "Distruzione del Drago",
			'pt-br': "Aniquilação Dracônica"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869722,
				tcgplayer: 675923
			}
		}
	],
}

export default card