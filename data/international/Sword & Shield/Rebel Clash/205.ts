import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		'en-us': "Galarian Perrserker",
		'fr-fr': "Berserkatt de Galar",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Steely Spirit",
			'fr-fr': "Boost Acier",
			'es-es': "Alma Acerada",
			'it-it': "Spiritoferreo",
			'pt-br': "Espírito Férreo",
			'de-de': "Stählerner Wille"
		},

		effect: {
			'en-us': "Your Metal Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Metal infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Metal hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Metal infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Metal causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Metal-Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
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
			foil: 'gold',
			thirdParty: {
				cardmarket: 457308,
				tcgplayer: 213288
			}
		},
	],
}

export default card
