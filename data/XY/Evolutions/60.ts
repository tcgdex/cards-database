import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machamp BREAK",
		fr: "Mackogneur TURBO",
		es: "Machamp TURBO",
		it: "Machamp TURBO",
		pt: "Machamp TURBO",
		de: "Machomei-TURBO"
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
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
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
				en: "Boomerang Lariat",
				fr: "Lasso Boomerang",
				es: "Lazo Boomerang",
				it: "Lazomerang",
				pt: "Bumerangue de Lariat",
				de: "Bumeranglasso"
			},
			effect: {
				en: "During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques de este Pokémon hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, os ataques deste Pokémon causarão 1000 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügen die Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners 100 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
