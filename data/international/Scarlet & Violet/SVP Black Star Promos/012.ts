import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		'en-us': "Dondozo",
		'fr-fr': "Oyacata",
		'es-es': "Dondozo",
		'it-it': "Dondozo",
		'pt-br': "Dondozo",
		'de-de': "Heerashai"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dangerous Wave",
			'fr-fr': "Vague Dangereuse",
			'es-es': "Ola Peligrosa",
			'it-it': "Onda Pericolosa",
			'pt-br': "Onda Perigosa",
			'de-de': "Gefährliche Welle"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 100 puntos de daño más.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 100 danni in più.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",
	illustrator: "Shin Nagasawa",
	description: {
		'en-us': "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 692232,
				tcgplayer: 653800
			},
		}
	],
}

export default card
