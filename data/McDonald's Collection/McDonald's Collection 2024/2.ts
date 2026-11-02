import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Charge",
				de: "Ladevorgang"
			},
			effect: {
				en: "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				de: "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			}
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				en: "Pika Punch",
				de: "Pikahieb"
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

	retreat: 1,
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802824,
				tcgplayer: 614371
			}
		}
	]
}

export default card

