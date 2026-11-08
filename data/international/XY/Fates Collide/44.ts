import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'pt-br': "Wormadam",
		'de-de': "Burmadame"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Spray",
				'fr-fr': "Jet Sableux",
				'es-es': "Rociado de Arena",
				'it-it': "Silicospruzzo",
				'pt-br': "Spray de Areia",
				'de-de': "Sandspray"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twin Bursts",
				'fr-fr': "Explosions en Duo",
				'es-es': "Estallidos Gemelos",
				'it-it': "Scoppiogemello",
				'pt-br': "Erupções Gêmeas",
				'de-de': "Doppelsalve"
			},
			effect: {
				'en-us': "If Mothim is on your Bench, this attack does 60 more damage.",
				'fr-fr': "Si Papilord est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si Mothim está en tu Banca, este ataque hace 60 puntos de daño más.",
				'it-it': "Se Mothim è nella tua panchina, questo attacco infligge 60 danni in più.",
				'pt-br': "Se Mothim estiver no seu Banco, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn sich Moterpel auf deiner Bank befindet, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Burmy evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	thirdParty: {
		cardmarket: 289829,
		tcgplayer: 117804
	}
}

export default card
