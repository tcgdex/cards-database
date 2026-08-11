import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Tomokazu Komiya",

	attacks: [{
		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Corkscrew Punch",
			'de-de': "Korkenzieherhieb"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Berserk",
			'fr-fr': "Dracolère",
			'es-es': "Cólera",
			'it-it': "Furore",
			'pt-br': "Berserk",
			'de-de': "Wutausbruch"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 90 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 90 danni in più.",
			'pt-br': "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+",
		cost: ["Water", "Fighting"]
	}],

	retreat: 2,
	dexId: [780],

	description: {
		'en-us': "Drampa is a kind and friendly Pokémon—up until it's angered. When that happens, it stirs up a gale and flattens everything around."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574167,
				tcgplayer: 246917
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574167,
				tcgplayer: 246917
			}
		},
	],
}

export default card
