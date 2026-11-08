import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [598],
	set: Set,

	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier",
		'es-es': "Ferrothorn",
		'it-it': "Ferrothorn",
		'pt-br': "Ferrothorn",
		'de-de': "Tentantel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exoskeleton",
			'fr-fr': "Exosquelette",
			'es-es': "Exosqueleto",
			'it-it': "Esoscheletro",
			'pt-br': "Exoesqueleto",
			'de-de': "Exoskelett"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spinning Needles",
			'fr-fr': "Aiguilles Tournoyantes",
			'es-es': "Púas Giratorias",
			'it-it': "Aghi Rotanti",
			'pt-br': "Espinhos Giratórios",
			'de-de': "Wirbelnadeln"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Spinning Needles attack does 100 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Aiguilles Tournoyantes de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Púas Giratorias de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Aghi Rotanti di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Espinhos Giratórios deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Wirbelnadeln dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Its spikes are harder than steel. This Pokémon crawls across rock walls by stabbing the spikes on its feelers into the stone.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740752,
				tcgplayer: 523890,
				cardtrader: 265238
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
