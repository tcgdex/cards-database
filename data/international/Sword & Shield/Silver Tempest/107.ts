import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'es-es': "Triple Robo",
			'it-it': "Pescata Tripla",
			'pt-br': "Compra Tripla",
			'de-de': "Dreifachzug"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas.",
			'de-de': "Ziehe 3 Karten."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Callous Wings",
			'fr-fr': "Ailes Cruelles",
			'es-es': "Alas Despiadadas",
			'it-it': "Ali Spietate",
			'pt-br': "Asas Impiedosas",
			'de-de': "Kompromisslose Flügel"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Murkrow.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Cornèbre de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Murkrow en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con un Murkrow della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Murkrow no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Kramurx auf deiner Bank austauschen."
		},

		damage: 120
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
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682154,
				tcgplayer: 451761
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682154,
				tcgplayer: 451761
			}
		},
	],
}

export default card
