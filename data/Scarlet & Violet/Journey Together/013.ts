import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		de: "Hydragil",
		it: "Accelgor",
		pt: "Accelgor",
		'es-mx': "Accelgor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Poisonous Ploy",
			fr: "Ruse Empoisonnée",
			es: "Ardid Venenoso",
			de: "Giftige List",
			it: "Manovra Velenosa",
			pt: "Manobra Tóxica",
			'es-mx': "Técnica Venenosa"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado. Cambia este Pokémon por uno de tus Pokémon en Banca.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato. Scambia questo Pokémon con uno della tua panchina.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
