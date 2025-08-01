import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
		es: "Meowth de Alola",
		it: "Meowth di Alola",
		pt: "Meowth de Alola",
		de: "Alola-Mauzi"
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
				en: "Spoil the Fun",
				fr: "Plaisir Gâché",
				es: "Aguafiestas",
				it: "Guastafeste",
				pt: "Estraga-prazer",
				de: "Spielverderber"
			},
			effect: {
				en: "If you go second, this attack does 60 more damage during your first turn.",
				fr: "Si vous jouez en second, cette attaque inflige 60 dégâts supplémentaires pendant votre premier tour.",
				es: "Si sales segundo, este ataque hace 60 puntos de daño más durante tu primer turno.",
				it: "Se inizi per secondo, questo attacco infligge 60 danni in più durante il tuo primo turno.",
				pt: "Se você for o segundo a jogar, este ataque causará 60 pontos de dano a mais durante a sua primeira vez de jogar.",
				de: "Wenn du als Zweiter am Zug bist, fügt diese Attacke während deines ersten Zuges 60 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 365755
	}
}

export default card
