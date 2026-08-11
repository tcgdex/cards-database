import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'en-us': "Dubwool",
		'fr-fr': "Moumouflon",
		'es-es': "Dubwool",
		'it-it': "Dubwool",
		'pt-br': "Dubwool",
		'de-de': "Zwollock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		'en-us': "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bounce",
			'fr-fr': "Rebond",
			'de-de': "Sprungfeder",
			'es-es': "Bote",
			'pt-br': "Ricochete",
			'it-it': "Rimbalzo"
		},

		damage: 30,

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'de-de': "Rolltackle",
			'es-es': "Placaje Giro",
			'pt-br': "Golpe de Colisão Rolante",
			'it-it': "Rollazione"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582959,
				tcgplayer: 253324
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582959,
				tcgplayer: 253324
			}
		},
	],
}

export default card
