import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
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
				en: "Stir and Snooze",
				fr: "Sommeil Lourd",
				es: "Vuelta y Cabezadita",
				it: "Lasciadormir",
				pt: "Agitar e Acalmar",
				de: "Umdrehen und Dösen"
			},
			effect: {
				en: "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.",
				fr: "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
				es: "Si este Pokémon está Dormido, lanza 2 monedas en vez de 1 entre turnos. Si sale cruz en alguna de ellas, este Pokémon está todavía Dormido.",
				it: "Se questo Pokémon è addormentato, tra un turno e l'altro, lancia due volte una moneta invece di una. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
				pt: "Se este Pokémon estiver Adormecido, jogue 2 moedas em vez de 1 entre as vezes de jogar. Se alguma delas for coroa, esse Pokémon permanecerá Adormecido.",
				de: "Wenn dieses Pokémon schläft, wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen \"Zahl\" zeigen, schläft dieses Pokémon weiter."
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
				en: "Sleepy Press",
				fr: "Pression Torpide",
				es: "Presión Soporífera",
				it: "Sonnopressa",
				pt: "Aperto Sonolento",
				de: "Schlafwalze"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 20 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
				es: "Cura 20 puntos de daño a este Pokémon. Este Pokémon pasa a estar Dormido.",
				it: "Cura questo Pokémon da 20 danni. Questo Pokémon viene addormentato.",
				pt: "Cure 20 de danos deste Pokémon. Este Pokémon agora está Adormecido.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon. Dieses Pokémon schläft jetzt."
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



}

export default card
