import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		'fr-fr': "Berserkatt de Galar",
		'en-us': "Galarian Perrserker",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Miaouss de Galar",
		'en-us': "Galarian Meowth"
	},

	abilities: [{
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
			'fr-fr': "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'en-us': "Your Metal Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'es-es': "Los ataques de tus Pokémon Metal hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Metal infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Metal causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Metal-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Griffe Acier",
			'en-us': "Metal Claw",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539823,
				tcgplayer: 232471
			}
		},
	],
}

export default card
