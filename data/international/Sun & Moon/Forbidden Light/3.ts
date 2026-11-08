import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Ice Shard",
				'fr-fr': "Éclats Glace",
				'es-es': "Canto Helado",
				'it-it': "Geloscheggia",
				'pt-br': "Caco de Gelo",
				'de-de': "Eissplitter"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Fighting, este ataque hace 40 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Fighting, questo attacco infligge 40 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Fighting, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Fighting-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "In the spring, it grows berries with the texture of frozen treats around its belly.",
	},

	thirdParty: {
		cardmarket: 355524,
		tcgplayer: 165650
	}
}

export default card
