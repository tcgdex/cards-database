import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Swords Dance",
			'fr-fr': "Danse Lames",
			'es-es': "Danza Espada",
			'it-it': "Danzaspada",
			'pt-br': "Dança das Espadas",
			'de-de': "Schwerttanz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Slicing Blade attack does 80 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Lame Tranchante de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Cuchilla Cortante de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Affettalama di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Lâmina Fatiante deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Schwertschneide dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 40
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
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The two swords employ a strategy of rapidly alternating between offense and defense to bring down their prey.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740671,
				tcgplayer: 523810,
				cardtrader: 265251
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740671,
				tcgplayer: 523810,
				cardtrader: 265251
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
