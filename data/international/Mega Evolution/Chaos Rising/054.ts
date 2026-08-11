import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It attacks by spraying a repugnant fluid from its tail, but the stench dulls after a few squirts.",
	},


	name: {
		'en-us': "Skuntank",
		'fr-fr': "Moufflair",
		'es-es': "Skuntank",
		'es-mx': "Skuntank",
		'de-de': "Skuntank",
		'it-it': "Skuntank",
		'pt-br': "Skuntank"
	},

	illustrator: "Yuriko Akase",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [435],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Stunky"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'es-mx': "Patada Trasera",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro"
		},

		cost: ["Darkness"],
		damage: 40
	}, {
		name: {
			'en-us': "Smash Turn",
			'fr-fr': "Tour Fracassant",
			'es-es': "Golpe Giro",
			'es-mx': "Giro Devastador",
			'de-de': "Abdrehender Schmetterer",
			'it-it': "Girata Distruttiva",
			'pt-br': "Virada Esmagadora"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 100,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con uno nella tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886446,
				tcgplayer: 693544
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886446,
				tcgplayer: 693544
			}
		},
	],
}

export default card
