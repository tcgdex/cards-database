import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		'fr-fr': "Canarticho",
		'en-us': "Farfetch'd",
		'es-es': "Farfetch'd",
		'it-it': "Farfetch'd",
		'pt-br': "Farfetch'd",
		'de-de': "Porenta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Aubaine",
			'en-us': "Package Deal",
			'es-es': "Paquete Ganga",
			'it-it': "Pacchetto Completo",
			'pt-br': "Promoção Combinada",
			'de-de': "Pauschale"
		},

		effect: {
			'fr-fr': "Piochez 2 cartes.",
			'en-us': "Draw 2 cards.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poireau Tabasseur",
			'en-us': "Leek Clobber",
			'es-es': "Aporreo con Puerro",
			'it-it': "Gambomazzata",
			'pt-br': "Alho-poró Esmagador",
			'de-de': "Lauchvermöbler"
		},

		damage: 30
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
	regulationMark: "G",

	description: {
		'en-us': "They use a plant stalk as a weapon, but not all of them use it in the same way. Several distinct styles of stalk fighting have been observed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733678,
				tcgplayer: 516652,
				cardtrader: 261117
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733678,
				tcgplayer: 516652,
				cardtrader: 261117
			}
		},
	],

	illustrator: "KG-2000",

	
}

export default card
