import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Galarian Darmanitan",
		'fr-fr': "Darumacho de Galar",
		'es-es': "Darmanitan de Galar",
		'it-it': "Darmanitan di Galar",
		'pt-br': "Darmanitan de Galar",
		'de-de': "Galar-Flampivian"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [555],
	set: Set,
	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Galarian Darumaka",
		'fr-fr': "Darumarond de Galar",
		'es-es': "Darumaka de Galar",
		'it-it': "Darumaka di Galar",
		'pt-br': "Darumaka de Galar",
		'de-de': "Galar-Flampion"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Heat",
				'fr-fr': "Chaleur Gelée",
				'es-es': "Calor Congelado",
				'it-it': "Gelocalore",
				'pt-br': "Calor Congelado",
				'de-de': "Eisige Hitze"
			},
			effect: {
				'en-us': "You may discard all Water Energy from this Pokémon. If you do, this attack does 60 more damage.",
				'fr-fr': "Vous pouvez défausser toute l'Énergie Water attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Water de este Pokémon. Si lo haces, este ataque hace 60 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Water da questo Pokémon. Se lo fai, questo attacco infligge 60 danni in più.",
				'pt-br': "Você pode descartar todas as Energias Water deste Pokémon. Se fizer isto, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Du kannst alle Water-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Anger has reignited its atrophied flame sac. This Pokémon spews fire everywhere as it rampages indiscriminately."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483014,
				tcgplayer: 219241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483014,
				tcgplayer: 219241
			}
		},
	],
}

export default card
