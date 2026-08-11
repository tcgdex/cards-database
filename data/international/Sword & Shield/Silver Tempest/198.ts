import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [894],
	set: Set,

	name: {
		'en-us': "Regieleki VMAX",
		'fr-fr': "Regieleki VMAX",
		'es-es': "Regieleki VMAX",
		'it-it': "Regieleki VMAX",
		'pt-br': "Regieleki VMAX",
		'de-de': "Regieleki VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Regieleki V",
		'fr-fr': "Regieleki-V",
		'es-es': "Regieleki V",
		'it-it': "Regieleki-V",
		'pt-br': "Regieleki V",
		'de-de': "Regieleki-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Transistor",
			'fr-fr': "Transistor",
			'es-es': "Transistor",
			'it-it': "Transistor",
			'pt-br': "Transistor",
			'de-de': "Transistor"
		},

		effect: {
			'en-us': "Your Basic Lightning Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Lightning de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Lightning Básicos hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Base Lightning infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Lightning Básicos causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Basis-Lightning-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Thunder and Lightning",
			'fr-fr': "Tonnerromax et Foudromax",
			'es-es': "Maxitruenos y Maxirrelámpagos",
			'it-it': "Dynafolgore Tonante",
			'pt-br': "Raios e Trovões Max",
			'de-de': "Dyna-Donner-und-Blitz"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 682246,
				tcgplayer: 451988
			}
		},
	],
}

export default card
