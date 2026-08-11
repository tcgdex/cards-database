import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'pt-br': "Hitmonchan",
		'de-de': "Nockchan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Uta",

	attacks: [{
		name: {
			'en-us': "Clean Hit",
			'fr-fr': "Coup Net",
			'es-es': "Impacto Limpio",
			'it-it': "Colpo Pulito",
			'pt-br': "Clean Hit",
			'de-de': "Sauberer Treffer"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			'pt-br': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Bullet Straight Punch",
			'fr-fr': "Poing Direct Tiré",
			'es-es': "Puño Bala Directo",
			'it-it': "Pugno Diretto Fulmineo",
			'pt-br': "Bullet Straight Punch",
			'de-de': "Geschossgerade"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "This attack's damage isn't affected by Resistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Its punches slice the air. However, it seems to need a short break after fighting for three minutes."
	},

	dexId: [107],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574129,
				tcgplayer: 246871
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574129,
				tcgplayer: 246871
			}
		},
	],
}

export default card
