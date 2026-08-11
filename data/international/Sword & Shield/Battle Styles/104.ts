import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Steel Slice",
			'fr-fr': "Acier Tranché",
			'es-es': "Tajo Acerado",
			'it-it': "Tagliacciaio",
			'pt-br': "Fatiar Aço",
			'de-de': "Stahlschnitt"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Metal Pokémon, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Metal, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Metal, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Metal, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Metal-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless"]
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


	stage: "Stage1",

	description: {
		'en-us': "Violent conflicts erupt between Bisharp and Fraxure over places where sharpening stones can be found."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545601,
				tcgplayer: 234193
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545601,
				tcgplayer: 234193
			}
		},
	],
}

export default card
