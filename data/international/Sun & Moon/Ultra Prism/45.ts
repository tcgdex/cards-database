import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		403,
	],

	hp: 50,

	types: [
		"Lightning",
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
				"Lightning",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock Statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 10,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
	},

	thirdParty: {
		cardmarket: 315975,
		tcgplayer: 157662
	}
}

export default card
