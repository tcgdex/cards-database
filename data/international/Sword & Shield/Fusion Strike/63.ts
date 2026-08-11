import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [259],
	set: Set,

	name: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'es-es': "Marshtomp",
		'it-it': "Marshtomp",
		'pt-br': "Marshtomp",
		'de-de': "Moorabbel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'es-es': "Mudkip",
		'it-it': "Mudkip",
		'pt-br': "Mudkip",
		'de-de': "Hydropi"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		'en-us': "Living on muddy ground that provides poor footing has made its legs sturdy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'de-de': "Lehmschelle",
			'es-es': "Bofetón Lodo",
			'pt-br': "Tapa de Lama",
			'it-it': "Fangosberla"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Energy Loop",
			'fr-fr': "Boucle d'Énergie",
			'de-de': "Energieschleife",
			'es-es': "Bucle de Energía",
			'pt-br': "Loop de Energia",
			'it-it': "Circuito Energetico"
		},

		damage: 80,

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'pt-br': "Coloque 1 Energia ligada a este Pokémon na sua mão.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582197,
				tcgplayer: 253201
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582197,
				tcgplayer: 253201
			}
		},
	],
}

export default card
