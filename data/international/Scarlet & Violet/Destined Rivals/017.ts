import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1011],
	set: Set,

	name: {
		'en-us': "Dipplin",
		'fr-fr': "Pomdramour",
		'de-de': "Sirapfel",
		'it-it': "Dipplin",
		'es-es': "Dipplin",
		'pt-br': "Dipplin",
		'es-mx': "Dipplin"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'de-de': "Knapfel",
		'it-it': "Applin",
		'es-es': "Applin",
		'pt-br': "Applin",
		'es-mx': "Applin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Energy Loop",
			'fr-fr': "Boucle d'Énergie",
			'de-de': "Energieschleife",
			'it-it': "Circuito Energetico",
			'es-es': "Bucle de Energía",
			'pt-br': "Loop de Energia",
			'es-mx': "Circuito de Energía"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'pt-br': "Coloque uma Energia ligada a este Pokémon na sua mão.",
			'es-mx': "Pon 1 Energía unida a este Pokémon en tu mano."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825891,
				tcgplayer: 632843
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825891,
				tcgplayer: 632843
			}
		},
	],
}

export default card
