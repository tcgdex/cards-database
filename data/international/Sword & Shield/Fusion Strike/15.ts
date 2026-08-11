import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		'en-us': "Virizion",
		'fr-fr': "Viridium",
		'es-es': "Virizion",
		'it-it': "Virizion",
		'pt-br': "Virizion",
		'de-de': "Viridium"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "Legends say this Pokémon confounded opponents with its swift movements."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bail Out",
			'fr-fr': "Renflouage",
			'de-de': "Freilassen",
			'es-es': "Sacar de Apuros",
			'pt-br': "Salvamento",
			'it-it': "Soccorso"
		},

		effect: {
			'en-us': "Put up to 2 Pokémon from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.",
			'de-de': "Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand.",
			'es-es': "Pon hasta 2 Pokémon de tu pila de descartes en tu mano.",
			'pt-br': "Coloque até 2 Pokémon da sua pilha de descarte na sua mão.",
			'it-it': "Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'de-de': "Solarstrahl",
			'es-es': "Rayo Solar",
			'pt-br': "Raio Solar",
			'it-it': "Solarraggio"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582056,
				tcgplayer: 253092
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582056,
				tcgplayer: 253092
			}
		},
	],
}

export default card
