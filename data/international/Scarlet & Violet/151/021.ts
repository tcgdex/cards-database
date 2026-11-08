import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [21],
	set: Set,

	name: {
		'fr-fr': "Piafabec",
		'en-us': "Spearow",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Avantage Évolutif",
			'en-us': "Evolutionary Advantage",
			'es-es': "Ventaja Evolutiva",
			'it-it': "Vantaggio Evolutivo",
			'pt-br': "Vantagem Evolucionária",
			'de-de': "Entwicklungsvorteil"
		},

		effect: {
			'fr-fr': "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
			'en-us': "If you go second, this Pokémon can evolve during your first turn.",
			'es-es': "Si sales en segundo lugar, este Pokémon puede evolucionar durante tu primer turno.",
			'it-it': "Se inizi per secondo, questo Pokémon può evolversi durante il tuo primo turno.",
			'pt-br': "Se você for o segundo a jogar, este Pokémon poderá evoluir durante o seu primeiro turno.",
			'de-de': "Wenn du als Zweiter am Zug bist, kann sich dieses Pokémon während deines ersten Zuges entwickeln."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Plongée Rapide",
			'en-us': "Speed Dive",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Due to its short wings, it can't fly long distances. It wanders about restlessly and pecks at bug Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733616,
				tcgplayer: 502587,
				cardtrader: 261150
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733616,
				tcgplayer: 502587,
				cardtrader: 261150
			}
		},
	],

	illustrator: "Gemi",

	
}

export default card
