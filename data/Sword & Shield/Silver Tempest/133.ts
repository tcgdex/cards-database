import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Radiant Hunt",
			fr: "Chasse Radieuse",
			es: "Caza Radiante",
			it: "Caccia Lucente",
			pt: "Caçada Radiante",
			de: "Strahlende Jagd"
		},

		effect: {
			en: "Knock Out 1 of your opponent's Radiant Pokémon.",
			fr: "Mettez K.O. l'un des Pokémon Radieux de votre adversaire.",
			es: "Deja Fuera de Combate a 1 de los Pokémon Radiantes de tu rival.",
			it: "Metti KO uno dei Pokémon Lucenti del tuo avversario.",
			pt: "Nocauteie 1 dos Pokémon Radiantes do seu oponente.",
			de: "Mache 1 Strahlendes Pokémon deines Gegners kampfunfähig."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Seventh Echo",
			fr: "Septième Écho",
			es: "Séptimo Eco",
			it: "Settima Eco",
			pt: "Sétimo Eco",
			de: "Siebtes Echo"
		},

		effect: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			es: "Roba cartas hasta que tengas 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão.",
			de: "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682180,
		tcgplayer: 451786
	}
}

export default card