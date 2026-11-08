import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Berserkatt de Galar",
		'en-us': "Galarian Perrserker",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'fr-fr': "Boost Acier",
				'en-us': "Steely Spirit",
				'es-es': "Alma Acerada",
				'it-it': "Spiritoferreo",
				'pt-br': "Espírito Férreo",
				'de-de': "Stählerner Wille"
			},
			effect: {
				'fr-fr': "Les attaques de vos Pokémon {M} infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'en-us': "Your {M} Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'es-es': "Los ataques de tus Pokémon {M} hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Pokémon {M} infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques dos seus Pokémon {M} causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Attacken deiner {M}-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'fr-fr': "Griffe Acier",
				'en-us': "Metal Claw",
				'es-es': "Garra Metal",
				'it-it': "Ferrartigli",
				'pt-br': "Garra de Metal",
				'de-de': "Metallklaue"
			},

			damage: 70,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'de-de': "Galar-Mauzi",
		'es-es': "Meowth de Galar",
		'pt-br': "Meowth de Galar",
		'it-it': "Meowth di Galar"
	},

	description: {
		'en-us': "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	dexId: [863],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 437164
	}
}

export default card
