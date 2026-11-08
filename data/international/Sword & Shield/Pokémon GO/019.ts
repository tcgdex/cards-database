import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hold Still",
			'fr-fr': "Ne Bougez Pas",
			'es-es': "Permanecer Inmóvil",
			'it-it': "Immobile",
			'pt-br': "Ficar Parado",
			'de-de': "Stillhalten"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Ideal Fishing Day",
			'fr-fr': "Bonne Pêche",
			'es-es': "Día de Pesca Perfecto",
			'it-it': "Giornata Pescosa",
			'pt-br': "Dia de Pesca Perfeito",
			'de-de': "Idealer Tag zum Angeln"
		},

		effect: {
			'en-us': "Put an Item card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Slow-witted and oblivious, this Pokémon won't feel any pain if its tail gets eaten. It won't notice when its tail grows back, either.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665659,
				tcgplayer: 276949
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665659,
				tcgplayer: 276949
			}
		},
	],
}

export default card
