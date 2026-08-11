import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Stir and Snooze",
				'fr-fr': "Sommeil Lourd",
				'es-es': "Vuelta y Cabezadita",
				'it-it': "Lasciadormir",
				'pt-br': "Agitar e Acalmar",
				'de-de': "Umdrehen und Dösen"
			},
			effect: {
				'en-us': "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.",
				'fr-fr': "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
				'es-es': "Si este Pokémon está Dormido, lanza 2 monedas en vez de 1 entre turnos. Si sale cruz en alguna de ellas, este Pokémon está todavía Dormido.",
				'it-it': "Se questo Pokémon è addormentato, tra un turno e l'altro, lancia due volte una moneta invece di una. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
				'pt-br': "Se este Pokémon estiver Adormecido, jogue 2 moedas em vez de 1 entre as vezes de jogar. Se alguma delas for coroa, esse Pokémon permanecerá Adormecido.",
				'de-de': "Wenn dieses Pokémon schläft, wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen \"Zahl\" zeigen, schläft dieses Pokémon weiter."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Press",
				'fr-fr': "Pression Torpide",
				'es-es': "Presión Soporífera",
				'it-it': "Sonnopressa",
				'pt-br': "Aperto Sonolento",
				'de-de': "Schlafwalze"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon. This Pokémon is now Asleep.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
				'es-es': "Cura 20 puntos de daño a este Pokémon. Este Pokémon pasa a estar Dormido.",
				'it-it': "Cura questo Pokémon da 20 danni. Questo Pokémon viene addormentato.",
				'pt-br': "Cure 20 de danos deste Pokémon. Este Pokémon agora está Adormecido.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon. Dieses Pokémon schläft jetzt."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	thirdParty: {
		cardmarket: 281563,
		tcgplayer: 91217
	}
}

export default card
