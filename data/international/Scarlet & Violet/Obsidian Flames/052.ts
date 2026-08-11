import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [537],
	set: Set,

	name: {
		'fr-fr': "Crapustule",
		'en-us': "Seismitoad",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Batracné",
		'en-us': "Palpitoad",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Zone Sismique",
			'en-us': "Quaking Zone",
			'es-es': "Zona Sísmica",
			'it-it': "Area Tellurica",
			'pt-br': "Zona de Tremor",
			'de-de': "Bebenzone"
		},

		effect: {
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire coûtent {C} de plus.",
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost {C} more.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival cuestan {C} más.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi usati dal Pokémon attivo del tuo avversario aumenta di {C}.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente custarão {C} a mais.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der vom Aktiven Pokémon deines Gegners eingesetzten Attacken um {C}."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Écho",
			'en-us': "Echoed Voice",
			'es-es': "Eco Voz",
			'it-it': "Echeggiavoce",
			'pt-br': "Voz Ecoante",
			'de-de': "Widerhall"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 100 more damage (before applying Weakness and Resistance).",
			'es-es': "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Echeggiavoce di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Voz Ecoante deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is popular among the elderly, who say the vibrations of its lumps are great for massages.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725132,
				tcgplayer: 509796,
				cardtrader: 255612
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725132,
				tcgplayer: 509796,
				cardtrader: 255612
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
