import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr",
		de: "Shuppet"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		353,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disable",
				fr: "Entrave",
				de: "Aussetzer"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, choisissez l’une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" 1 Angriff des Verteidigenden Pokémon. Das Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				de: "Spuk"
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon.",
				fr: "Placez un marqueur de dégât sur le Pokémon Défenseur.",
				de: "Lege 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It uses its horn to feed on envy and malice, or so it’s said. It’s very active at night."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279605,
		tcgplayer: 89202
	}
}

export default card
