import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Swords Dance",
			'fr-fr': "Danse Lames",
			'es-es': "Danza Espada",
			'it-it': "Danzaspada",
			'pt-br': "Dança das Espadas",
			'de-de': "Schwerttanz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Slash attack does 70 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Tranche de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Cuchillada de este Pokémon hace 70 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Lacerazione di questo Pokémon infligge 70 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Talho deste Pokémon causará 70 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Schlitzer dieses Pokémon 70 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "A pack of these Pokémon forms to serve a Bisharp boss. Each Pawniard trains diligently, dreaming of one day taking the lead."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545596,
				tcgplayer: 234190
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545596,
				tcgplayer: 234190
			}
		},
	],
}

export default card
