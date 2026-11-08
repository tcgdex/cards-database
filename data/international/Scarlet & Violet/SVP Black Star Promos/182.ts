import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'en-us': "Iono's Kilowattrel",
		'fr-fr': "Fulgulairo de Mashynn",
		'de-de': "Enigmaras Voltrean",
		'es-es': "Kilowattrel de e-Nigma",
		'it-it': "Kilowattrel di Kissara",
		'pt-br': "Kilowattrel da Kissera"
	},

	illustrator: "DOM",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Iono's Wattrel",
		'fr-fr': "Zapétrel de Mashynn",
		'es-es': "Wattrel de e-Nigma",
		'de-de': "Enigmaras Voltrel",
		'it-it': "Wattrel di Kissara",
		'pt-br': "Wattrel da Kissera",
		'es-mx': "Wattrel de e-Nigma"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flashing Draw",
			'fr-fr': "Pioche Flash",
			'de-de': "Blitzschnelles Ziehen",
			'es-es': "Robo Súbito",
			'it-it': "Pescalampo",
			'pt-br': "Piscou, Comprou"
		},

		effect: {
			'en-us': "You must discard a Basic {L} Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous devez défausser une Énergie {L} de base de ce Pokémon pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'de-de': "Du musst 1 Basis-{L}-Energie von diesem Pokémon auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			'es-es': "Debes descartar 1 Energía {L} Básica de este Pokémon para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Devi scartare un'Energia base {L} da questo Pokémon per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você deve descartar uma Energia {L} Básica deste Pokémon para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'de-de': "Flotter Sprung",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 816615,
				tcgplayer: 623234
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 817773,
				tcgplayer: 624482
			},
		}
	],
}

export default card
