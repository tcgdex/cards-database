import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		'fr-fr': "Azumarill",
		'en-us': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Marill",
		'en-us': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Vide Bulle",
			'en-us': "Bubble Drain",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'pt-br': "Dreno de Bolha",
			'de-de': "Blasengully"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Souplesse",
			'en-us': "Slam",
			'es-es': "Atizar",
			'it-it': "Schianto",
			'pt-br': "Pancada Brusca",
			'de-de': "Slam"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715519,
				tcgplayer: 497456,
				cardtrader: 248647
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715519,
				tcgplayer: 497456,
				cardtrader: 248647
			}
		},
	],

	illustrator: "En Morikura",

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
	},
}

export default card
