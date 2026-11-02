import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [54],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Headache",
				fr: "Migraine",
				de: "Kopfweh"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
				de: "Wirf 1 Münze. Bei „Kopf“ kann dein Gegner in seinem nächsten Zug keine Trainer-, Unterstützer- und Stadion-Karten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Latent Power",
				fr: "Puissance dormante",
				de: "Schlummernde Kräfte"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Psykokwak est alors Confus.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt dieser Angriff dem Verteidigenden Pokémon keinen Schaden zu, stattdessen ist Enton jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		en: "Overwhelmed by enigmatic abilities, it suffers a constant headache. It sometimes uses mysterious powers.",
		de: "Leidet unter stetigem Kopfschmerz, ausgelöst durch seltsame Kräfte, die es aber auch einsetzen kann."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88439,
				cardmarket: 278508
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278508,
				tcgplayer: 88439
			}
		}
	],

}

export default card
