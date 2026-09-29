import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "OOYAMA",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tropical Vibes",
			fr: "Ambiance Tropicale",
			de: "Tropische Vibes",
			es: "Rollito Tropical",
			it: "Atmosfera Tropicale",
			'es-mx': "Vibras Tropicales",
			pt: "Vibes Tropicais"
		},

		effect: {
			en: "This Pokémon is now Asleep. Draw cards until you have 6 cards in your hand.",
			fr: "Ce Pokémon est maintenant Endormi. Piochez des cartes jusqu'à en avoir 6 en main.",
			de: "Dieses Pokémon schläft jetzt. Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast.",
			es: "Este Pokémon pasa a estar Dormido. Roba cartas hasta tener 6 cartas en tu mano.",
			it: "Questo Pokémon viene addormentato. Pesca fino ad avere sei carte in mano.",
			'es-mx': "Este Pokémon ahora está Dormido. Roba cartas hasta que tengas 6 cartas en tu mano.",
			pt: "Este Pokémon agora está Adormecido. Compre cartas até ter 6 cartas na sua mão."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907650,
				tcgplayer: 712947
			}
		}
	],
}

export default card
