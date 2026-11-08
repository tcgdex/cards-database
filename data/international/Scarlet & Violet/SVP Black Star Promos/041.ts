import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Splattering Poison",
			'fr-fr': "Poison Éclaboussant",
			'es-es': "Veneno Salpicante",
			'it-it': "Spruzzata di Veleno",
			'pt-br': "Respingar Veneno",
			'de-de': "Giftgespritze"
		},

		effect: {
			'en-us': "Both Active Pokémon are now Poisoned.",
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			'es-es': "Ambos Pokémon Activos pasan a estar Envenenados.",
			'it-it': "Entrambi i Pokémon attivi vengono avvelenati.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Envenenados.",
			'de-de': "Beide Aktiven Pokémon sind jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'es-es': "Coletón",
			'it-it': "Codabotta",
			'pt-br': "Surra de Cauda",
			'de-de': "Schweifvertrimmer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "kirisAki",
	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 720943,
				tcgplayer: 512049
			},
		}
	],
}

export default card
