import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Top Entry",
				fr: "Tombé de Haut"
			},
			effect: {
				en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.",
				fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Reignite",
				fr: "Rallumer"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez à l’un de vos Pokémon une carte Énergie Fire de votre pile de défausse."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Fire"]
}

export default card
