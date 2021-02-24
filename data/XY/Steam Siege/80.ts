import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		707,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wonder Lock",
				fr: "Serrure Merveille",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. Prevent any damage done to the Pokémon this card is attached to by attacks from your opponent's Mega Evolution Pokémon. If this card is attached to a Pokémon, discard this card at the end of your opponent's turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon en tant que carte Outil Pokémon. Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques des Pokémon Méga-Évolution de votre adversaire. Si cette carte est attachée à un Pokémon, défaussez-la à la fin du tour de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 30,

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
