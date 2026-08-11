import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Oswaldo KATO",

	attacks: [{
		name: {
			'en-us': "Rally Back",
			'fr-fr': "Répercussions",
			'es-es': "Apoyo Vengativo",
			'it-it': "Radunata Rinforzi",
			'pt-br': "Rally Back",
			'de-de': "Aufholjagd"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Solar Beam",
			'de-de': "Solarstrahl"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius."
	},

	dexId: [357],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574030,
				tcgplayer: 246821
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574030,
				tcgplayer: 246821
			}
		},
	],
}

export default card
