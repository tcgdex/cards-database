import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [I]",
		fr: "Zarbi I",
		de: "Icognito I"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	abilities: [{
		name: {
			fr: "[Increase]",
			de: "Increase"
		},

		effect: {
			fr: "Quand vous jouez Zarbi [I] depuis votre main, vous pouvez chercher dans votre deck une autre carte Zarbi et la placer sur votre Banc. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser ce pouvoir si votre Banc est plein.",
			de: "Wenn du Icognito I aus deiner hand ausspielst, kannst du dein Deck nach einer Karte, die icognito in ihren Namen hat, durchsuchen und diese auf deine Bank legen. Mische danach dein Deck. Du kannst diese Fähigkeit nicht anwenden, wenn deine Bank voll ist."
		},

		type: "Pokemon Power"
	}],

	thirdParty: {
		cardmarket: 274579
	}
}

export default card
