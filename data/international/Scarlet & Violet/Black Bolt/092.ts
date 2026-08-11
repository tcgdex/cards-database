import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'de-de': "Dressella",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'es-es': "Lilligant",
		'es-mx': "Lilligant"
	},

	illustrator: "En Morikura",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'de-de': "Lilminip",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'es-es': "Petilil",
		'es-mx': "Petilil"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bemusing Aroma",
			'fr-fr': "Parfum Troublant",
			'de-de': "Betörendes Aroma",
			'it-it': "Alteraroma",
			'pt-br': "Aroma Desconcertante",
			'es-es': "Aroma Desconcertante",
			'es-mx': "Aroma Desconcertante"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned. If tails, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Envenenado y Paralizado. Si sale cruz, el Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'de-de': "Zerschneider",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'es-es': "Corte",
			'es-mx': "Corte"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836093,
				tcgplayer: 642541
			}
		},
	]
}

export default card
