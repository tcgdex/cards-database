import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nutrients",
			'fr-fr': "Nutriments",
			'es-es': "Nutrientes",
			'it-it': "Nutrienti",
			'pt-br': "Nutrientes",
			'de-de': "Nährstoffe"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied",
			'es-es': "Tropezón",
			'it-it': "Inciampare",
			'pt-br': "Tropeção",
			'de-de': "Stolperer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794511,
				tcgplayer: 589866
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794511,
				tcgplayer: 589866
			}
		},
	],

	illustrator: "Yuka Morii",

}

export default card
