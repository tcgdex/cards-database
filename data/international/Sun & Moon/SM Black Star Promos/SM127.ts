import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Alolan Sandslash",
		'fr-fr': "Sablaireau d’Alola",
		'es-es': "Sandslash de Alola",
		'it-it': "Sandslash di Alola",
		'pt-br': "Sandslash de Alola",
		'de-de': "Alola-Sandamer"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
	},

	stage: "Stage1",

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'en-us': "Tumbling Attack",
			'fr-fr': "Attaque Trébuchante",
			'es-es': "Ataque Tambaleante",
			'it-it': "Attacco Capriola",
			'pt-br': "Ataque Cambalhota",
			'de-de': "Taumler"
		},

		damage: "80+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		cost: ["Metal", "Metal", "Colorless"]
	}],

	description: {
		'en-us': "This Pokémon's steel spikes are sheathed in ice. Stabs from these spikes cause deep wounds and severe frostbite as well.",
	},
}

export default card
