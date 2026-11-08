import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d’Alola",
		'es-es': "Meowth de Alola",
		'it-it': "Meowth di Alola",
		'pt-br': "Meowth de Alola",
		'de-de': "Alola-Mauzi"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Spoil the Fun",
				'fr-fr': "Plaisir Gâché",
				'es-es': "Aguafiestas",
				'it-it': "Guastafeste",
				'pt-br': "Estraga-prazer",
				'de-de': "Spielverderber"
			},
			effect: {
				'en-us': "If you go second, this attack does 60 more damage during your first turn.",
				'fr-fr': "Si vous jouez en second, cette attaque inflige 60 dégâts supplémentaires pendant votre premier tour.",
				'es-es': "Si sales segundo, este ataque hace 60 puntos de daño más durante tu primer turno.",
				'it-it': "Se inizi per secondo, questo attacco infligge 60 danni in più durante il tuo primo turno.",
				'pt-br': "Se você for o segundo a jogar, este ataque causará 60 pontos de dano a mais durante a sua primeira vez de jogar.",
				'de-de': "Wenn du als Zweiter am Zug bist, fügt diese Attacke während deines ersten Zuges 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When its delicate pride is wounded, or when the gold coin on its forehead is dirtied, it flies into a hysterical rage.",
	},

	thirdParty: {
		cardmarket: 365755,
		tcgplayer: 178931
	}
}

export default card
