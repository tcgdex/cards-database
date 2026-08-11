import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 30,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Evolutionary Advantage",
				'fr-fr': "Avantage Évolutif",
				'es-es': "Ventaja Evolutiva",
				'it-it': "Vantaggio Evolutivo",
				'pt-br': "Vantagem Evolucionária",
				'de-de': "Entwicklungsvorteil"
			},
			effect: {
				'en-us': "If you go second, this Pokémon can evolve during your first turn.",
				'fr-fr': "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
				'es-es': "Si sales segundo, este Pokémon puede evolucionar durante tu primer turno.",
				'it-it': "Se inizi per secondo, questo Pokémon può evolversi nel tuo primo turno.",
				'pt-br': "Se você for o segundo a jogar, este Pokémon poderá evoluir durante a sua primeira vez de jogar.",
				'de-de': "Wenn du als Zweiter am Zug bist, kann sich dieses Pokémon während deines ersten Zuges entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it finds a flower it likes, it dwells on that flower its whole life long. It floats in the wind's embrace with an untroubled heart.",
	},

	thirdParty: {
		cardmarket: 355597
	}
}

export default card
