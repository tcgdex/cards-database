import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		de: "Entoron"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Remedy",
				fr: "Remède naturel",
				de: "Natürliche Heilung"
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to Golduck, remove 2 damage counters from Golduck.",
				fr: "Lorsque vous attachez une carte Énergie Water de votre main à Akwakwak, retirez-lui 2 marqueurs de dégât.",
				de: "Entferne jedes Mal, wenn du eine -Energiekarte von deiner Hand an Entoron anlegst, 2 Schadensmarken von Entoron."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powerful Splash",
				fr: "Trempette puissante",
				de: "Mächtiger Platscher"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to all of your Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Water attachée à tous vos Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede -Energie, die an deinen Pokémon angelegt ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow."
	},

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279552,
		tcgplayer: 85817
	}
}

export default card
