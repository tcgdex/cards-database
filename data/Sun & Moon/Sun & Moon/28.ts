import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confusion Wave",
				fr: "Vague de Confusion",
				es: "Ola de Confusión",
				it: "Confusionda",
				pt: "Onda de Confusão",
				de: "Verwirrende Welle"
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295338
	}
}

export default card
