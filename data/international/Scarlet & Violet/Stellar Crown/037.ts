import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [564],
	set: Set,

	name: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'es-es': "Tirtouga",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'de-de': "Galapaflos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Antique Cover Fossil",
		'fr-fr': "Fossile Plaque Ancien",
		'es-es': "Fósil Tapa Antiguo",
		'it-it': "Vecchio Fossiltappo",
		'pt-br': "Fóssil Casca Arcaico",
		'de-de': "Antikes Schildfossil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Splashing Turn",
			'fr-fr': "Tour Éclaboussant",
			'es-es': "Giro Chapoteante",
			'it-it': "Girata Inondante",
			'pt-br': "Giro Borrifante",
			'de-de': "Platschende Drehung"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785891,
				tcgplayer: 567263
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785891,
				tcgplayer: 567263
			}
		},
	],

	illustrator: "takashi shiraishi",

}

export default card
