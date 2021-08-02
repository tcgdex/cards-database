import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		685,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tasting",
				fr: "Dégustation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. If this Pokémon is your Active Pokémon, draw 1 more card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Si ce Pokémon est votre Pokémon Actif, piochez une carte supplémentaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Pulse",
				fr: "Vibrumineuse",
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 60,

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



}

export default card
