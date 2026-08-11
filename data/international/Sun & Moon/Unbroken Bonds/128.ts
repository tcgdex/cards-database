import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	dexId: [808],

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Steel Melt",
				'fr-fr': "Fonte d’Acier",
				'es-es': "Fusión de Acero",
				'it-it': "Metallo Fuso",
				'pt-br': "Aço Derretido",
				'de-de': "Stahlschmelze"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Metal Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Metal, este ataque hace 40 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Metal, questo attacco infligge 40 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Metal, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Metal-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

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

	retreat: 1,

	description: {
		'en-us': "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel.",
	},

	thirdParty: {
		cardmarket: 372417,
		tcgplayer: 189227
	}
}

export default card
