import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck Bugs",
				'fr-fr': "Picore Insectes",
				'es-es': "Picotazos a Insectos",
				'it-it': "Becchinsetto",
				'pt-br': "Bicando Insetos",
				'de-de': "Insektenleser"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Grass Pokémon, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Grass, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Grass, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Grass, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Grass-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Farmers whose fields are troubled by bug Pokémon appreciate Spearow for its vigorous appetite and look after it.",
	},

	thirdParty: {
		cardmarket: 295408,
		tcgplayer: 126969
	}
}

export default card
