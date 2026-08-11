import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Munch",
				'fr-fr': "Mange-Feuille",
				'es-es': "Mascahojas",
				'it-it': "Mangifoglia",
				'pt-br': "Mastigar Folhas",
				'de-de': "Laubmampfer"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Grass, este ataque hace 20 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Grass, questo attacco infligge 20 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Grass, esse ataque causará 20 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Grass-Pokémon ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
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

	retreat: 1,

	description: {
		'en-us': "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
	},

	thirdParty: {
		cardmarket: 281340,
		tcgplayer: 90548
	}
}

export default card
