import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		293,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screaming Fit",
				fr: "Piquage de Crise",
				es: "Berrinche",
				it: "Capricci Sonori",
				pt: "Ataque Apavorante",
				de: "Schreianfall"
			},
			effect: {
				en: "Both Active Pokémon are now Confused.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus.",
				es: "Ambos Pokémon Activos pasan a estar Confundidos.",
				it: "Entrambi i Pokémon attivi vengono confusi.",
				pt: "Ambos os Pokémon Ativos agora estão Confusos.",
				de: "Beide Aktiven Pokémon sind jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281889
	}
}

export default card
