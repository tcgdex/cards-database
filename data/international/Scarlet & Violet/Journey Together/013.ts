import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [617],
	set: Set,

	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'de-de': "Hydragil",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'es-mx': "Accelgor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'de-de': "Schnuthelm",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'es-mx': "Shelmet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Poisonous Ploy",
			'fr-fr': "Ruse Empoisonnée",
			'es-es': "Ardid Venenoso",
			'de-de': "Giftige List",
			'it-it': "Manovra Velenosa",
			'pt-br': "Manobra Tóxica",
			'es-mx': "Técnica Venenosa"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado. Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Kazumasa Yasukuni",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817165,
				tcgplayer: 623440
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817165,
				tcgplayer: 623440
			}
		},
	],
}

export default card
