import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Small Appetite",
				'fr-fr': "Petit Appétit",
				'es-es': "Pequeño Apetito",
				'it-it': "Scarso Appetito",
				'pt-br': "Apetite Pequeno",
				'de-de': "Kleiner Hunger"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon’s maximum HP is 100 or more, this attack does nothing.",
				'fr-fr': "Si les PV maximum du Pokémon Actif de votre adversaire sont de 100 ou plus, cette attaque ne fait rien.",
				'es-es': "Si los PS máximos del Pokémon Activo de tu rival son 100 o más, este ataque no hace nada.",
				'it-it': "Se i PS massimi del Pokémon attivo del tuo avversario sono 100 o più, questo attacco non ha effetto.",
				'pt-br': "Se o PS máximo do Pokémon Ativo do seu oponente for 100 ou mais, este ataque não fará nada.",
				'de-de': "Wenn die maximalen KP des Aktiven Pokémon deines Gegners 100 oder mehr betragen, hat diese Attacke keine Auswirkungen."
			},
			damage: 50,

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

	retreat: 2,

	description: {
		'en-us': "It wraps itself around its prey and paralyzes it with electricity from the round spots on its sides. Then it chomps.",
	},

	thirdParty: {
		cardmarket: 299449,
		tcgplayer: 138527
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
