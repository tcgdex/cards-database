import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		en: "Iono's Kilowattrel",
		fr: "Fulgulairo de Mashynn",
		es: "Kilowattrel de e-Nigma",
		de: "Enigmaras Voltrean",
		it: "Kilowattrel di Kissara",
		pt: "Kilowattrel da Kissera",
		'es-mx': "Kilowattrel de e-Nigma"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Iono's Wattrel",
		fr: "Zapétrel de Mashynn",
		es: "Wattrel de e-Nigma",
		de: "Enigmaras Voltrel",
		it: "Wattrel di Kissara",
		pt: "Wattrel da Kissera",
		"es-mx": "Wattrel de e-Nigma"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flashing Draw",
			fr: "Pioche Flash",
			es: "Robo Súbito",
			de: "Blitzschnelles Ziehen",
			it: "Pescalampo",
			pt: "Piscou, Comprou",
			'es-mx': "Robo Destellante"
		},

		effect: {
			en: "You must discard a Basic {L} Energy from this Pokémon in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.",
			fr: "Vous devez défausser une Énergie {L} de base de ce Pokémon pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Debes descartar 1 Energía {L} Básica de este Pokémon para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			de: "Du musst 1 Basis-{L}-Energie von diesem Pokémon auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast.",
			it: "Devi scartare un'Energia base {L} da questo Pokémon per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			pt: "Você deve descartar uma Energia {L} Básica deste Pokémon para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão.",
			'es-mx': "Debes descartar 1 Energía Lightning Básica de este Pokémon para poder usar esta Habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			es: "Rayo Mach",
			de: "Flotter Sprung",
			it: "Fulmine Mach",
			pt: "Raio Supersônico",
			'es-mx': "Superrayo"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Terada Tera",

	thirdParty: {
		cardmarket: 817207
	},

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
