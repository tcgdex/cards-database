import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
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
		en: "Tynamo",
		fr: "Anchwatt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Small Appetite",
				fr: "Petit Appétit",
				es: "Pequeño Apetito",
				it: "Scarso Appetito",
				pt: "Apetite Pequeno",
				de: "Kleiner Hunger"
			},
			effect: {
				en: "If your opponent’s Active Pokémon’s maximum HP is 100 or more, this attack does nothing.",
				fr: "Si les PV maximum du Pokémon Actif de votre adversaire sont de 100 ou plus, cette attaque ne fait rien.",
				es: "Si los PS máximos del Pokémon Activo de tu rival son 100 o más, este ataque no hace nada.",
				it: "Se i PS massimi del Pokémon attivo del tuo avversario sono 100 o più, questo attacco non ha effetto.",
				pt: "Se o PS máximo do Pokémon Ativo do seu oponente for 100 ou mais, este ataque não fará nada.",
				de: "Wenn die maximalen KP des Aktiven Pokémon deines Gegners 100 oder mehr betragen, hat diese Attacke keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 299449
	}
}

export default card
