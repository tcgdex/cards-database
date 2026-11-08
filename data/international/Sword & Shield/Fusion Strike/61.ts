import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [226],
	set: Set,

	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta",
		'es-es': "Mantine",
		'it-it': "Mantine",
		'pt-br': "Mantine",
		'de-de': "Mantax"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "As it majestically swims, it doesn't care if Remoraid attach to it to scavenge for its leftovers."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Bounce",
			'fr-fr': "Rebond",
			'de-de': "Sprungfeder",
			'es-es': "Bote",
			'pt-br': "Ricochete",
			'it-it': "Rimbalzo"
		},

		damage: 20,

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'it-it': "Schizzi d'Onda"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582195,
				tcgplayer: 253195
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582195,
				tcgplayer: 253195
			}
		},
	],
}

export default card
