import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli",
		de: "Evoli"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Evolution",
				fr: "Évolution de l'Énergie",
				de: "Energy Evolution"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to Eevee, you may search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Put that card onto Eevee. (This counts as evolving Eevee.) Shuffle your deck afterward. This power can't be used when you attach an Energy card to Eevee as part of an attack's effect.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Evoli, vous pouvez choisir dans votre deck une carte qui évolue d'Evoli étant du même type que la carte Énergie que vous lui avez attachée. Placez cette carte sur Evoli (vous le faites ainsi évoluer). Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé lorsque vous attachez à Evoli une carte Énergie comme résultat d'une attaque.",
				de: "Whenever you attach an Energy card from your hand to Eevee, you may search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Put that card onto Eevee. (This counts as evolving Eevee.) Shuffle your deck afterward. This power can't be used when you attach an Energy card to Eevee as part of an attack's effect."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue battoir",
				de: "Tail Whap"
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276701,
		tcgplayer: 85081
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
