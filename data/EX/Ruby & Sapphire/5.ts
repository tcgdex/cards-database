import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Draw",
				fr: "Pioche d'énergie",
				de: "Energy Draw"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de votre main. Ensuite, vous pouvez piocher jusqu'à trois cartes dans votre deck. Ce pouvoir ne peut être utilisé si Delcatty est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), your may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Max Energy Source",
				fr: "Source d'énergie maximale",
				de: "Max Energy Source"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
				fr: "Inflige 10 dégâts pour chaque Énergie attachée à vos Pokémon Actifs.",
				de: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon."
			},
			damage: "10x",

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
		cardmarket: 275653,
		tcgplayer: 84734
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
