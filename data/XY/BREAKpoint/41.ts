import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Greninja BREAK",
		fr: "Amphinobi TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 170,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Giant Water Shuriken",
				fr: "Sheauriken Géant",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a Water Energy card from your hand. If you do, put 6 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			},
		},
	],

	attacks: [
		{

			name: {
				fr: "Règle des Évolutions TURBO",
			},


		},
	],

	retreat: 0
}

export default card
