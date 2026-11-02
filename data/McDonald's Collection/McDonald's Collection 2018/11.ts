import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		en: "Eevee",
		de: "Evoli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Evolution",
				de: "Energie-Evolution"
			},
			effect: {
				en: "When you attach a basic Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				de: "Wenn du während deines Zuges 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt und die denselben Typ wie jene Energiekarte hat, durchsuchen und sie auf dieses Pokémon legen, um es zu entwickeln. Mische anschließend dein Deck."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Quick Draw",
				de: "Schnellzieher"
			},
			effect: {
				en: "Flip a coin. If heads, draw a card.",
				de: "Wirf 1 Münze. Ziehe bei Kopf 1 Karte."
			},
			damage: 80,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366779,
				tcgplayer: 180459
			}
		}
	]
}

export default card

