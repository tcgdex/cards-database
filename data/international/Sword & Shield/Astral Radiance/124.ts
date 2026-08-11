import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [901],
	set: Set,

	name: {
		'en-us': "Ursaluna",
		'fr-fr': "Ursaking",
		'es-es': "Ursaluna",
		'it-it': "Ursaluna",
		'pt-br': "Ursaluna",
		'de-de': "Ursaluna"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peat Hunt",
			'fr-fr': "Chasse Tourbe",
			'es-es': "Caza de la Turba",
			'it-it': "Cacciatorba",
			'pt-br': "Caça-turfa",
			'de-de': "Torfjagd"
		},

		effect: {
			'en-us': "Put up to 2 cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 cartes de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 cartas de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Karten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bulky Bump",
			'fr-fr': "Impact Lourd",
			'es-es': "Topetón Corpulento",
			'it-it': "Gran Colpo",
			'pt-br': "Colisão Robusta",
			'de-de': "Wuchtiger Stoß"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "I believe it was Hisui's swampy terrain that gave Ursaluna its burly physique and newfound capacity to manipulate peat at will.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658785,
				tcgplayer: 272361
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658785,
				tcgplayer: 272361
			}
		},
	],
}

export default card
