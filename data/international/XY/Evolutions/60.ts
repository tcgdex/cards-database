import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Machamp BREAK",
		'fr-fr': "Mackogneur TURBO",
		'es-es': "Machamp TURBO",
		'it-it': "Machamp TURBO",
		'pt-br': "Machamp TURBO",
		'de-de': "Machomei-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Boomerang Lariat",
				'fr-fr': "Lasso Boomerang",
				'es-es': "Lazo Boomerang",
				'it-it': "Lazomerang",
				'pt-br': "Bumerangue de Lariat",
				'de-de': "Bumeranglasso"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, os ataques deste Pokémon causarão 1000 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügen die Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners 100 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 100,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 293413,
		tcgplayer: 124073
	}
}

export default card
