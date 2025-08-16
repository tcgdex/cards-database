import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
		de: "Vipitis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		336,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tail Blade",
				fr: "Queue-guillotine",
				de: "Schweifklinge"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Trainerkarten von seiner Hand spielen."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Tail",
				fr: "Queue-poison",
				de: "Giftschweif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277954,
		tcgplayer: 89086
	}
}

export default card
