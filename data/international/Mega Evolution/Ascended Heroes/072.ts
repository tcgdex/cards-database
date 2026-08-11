import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Iono's Kilowattrel",
		'fr-fr': "Fulgulairo de Mashynn",
		'es-es': "Kilowattrel de e-Nigma",
		'es-mx': "Kilowattrel de e-Nigma",
		'de-de': "Enigmaras Voltrean",
		'it-it': "Kilowattrel di Kissara",
		'pt-br': "Kilowattrel da Kissera"
	},

	evolveFrom: {
		'en-us': "Iono's Wattrel",
		'fr-fr': "Zapétrel de Mashynn",
		'es-es': "Wattrel de e-Nigma",
		'es-mx': "Wattrel de e-Nigma",
		'de-de': "Enigmaras Voltrel",
		'it-it': "Wattrel di Kissara",
		'pt-br': "Wattrel da Kissera",
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flashing Draw",
			'fr-fr': "Pioche Flash",
			'es-es': "Robo Súbito",
			'es-mx': "Robo Destellante",
			'de-de': "Blitzschnelles Ziehen",
			'it-it': "Pescalampo",
			'pt-br': "Piscou, Comprou"
		},

		effect: {
			'en-us': "You must discard a Basic {L} Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous devez défausser une Énergie {L} de base de ce Pokémon pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Debes descartar 1 Energía {L} Básica de este Pokémon para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'es-mx': "Debes descartar 1 Energía {L} Básica de este Pokémon para poder usar esta Habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'de-de': "Du musst 1 Basis-{L}-Energie von diesem Pokémon auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'it-it': "Devi scartare un'Energia base {L} da questo Pokémon per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você deve descartar uma Energia {L} Básica deste Pokémon para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'es-mx': "Superrayo",
			'de-de': "Flotter Sprung",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869683,
			tcgplayer: 675884
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870250,
			tcgplayer: 676909
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870249,
			tcgplayer: 677049
		}
	},
],
}

export default card
