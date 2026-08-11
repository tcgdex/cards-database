import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Samurott",
		'fr-fr': "Clamiral",
		'es-es': "Samurott",
		'it-it': "Samurott",
		'pt-br': "Samurott",
		'de-de': "Admurai"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shell Armor",
				'fr-fr': "Coque Armure",
				'es-es': "Caparazón",
				'it-it': "Guscioscudo",
				'pt-br': "Armadura de Concha",
				'de-de': "Panzerhaut"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño hecho a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado por ataques neste Pokémon é reduzido em 20 (após aplicar Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
			},
			effect: {
				'en-us': "Does 10 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Part of the armor on its anterior legs becomes a giant sword. Its cry alone is enough to intimidate most enemies.",
	},

	thirdParty: {
		cardmarket: 279769,
		tcgplayer: 88908
	}
}

export default card
