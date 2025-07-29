import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		de: "Krawumms"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambient Noise",
				fr: "Bruit d'ambiance",
				de: "Hintergrundlärm"
			},
			effect: {
				en: "Flip 2 coins. If the first coin is heads, this attack does 50 damage to the Defending Pokémon. If the first coin is tails, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If the second coin is heads, the Defending Pokémon is now Confused. If the second coin is tails, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn.",
				fr: "Lancez 2 pièces. Si la première pièce est face, cette attaque inflige 50 dégâts au Pokémon Défenseur. Si la première pièce est pile, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc). Si la seconde pièce est face, le Pokémon Défenseur est maintenant Confus. Si la seconde pièce est pile, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
				de: "Wirf 2 Münzen. Wenn die erste Münze \"Kopf\" gezeigt hat, fügt dieser Angriff dem Verteidigenden Pokémon 50 Schadenspunkte zu. Wenn die erste Münze \"Zahl\" gezeigt hat, fügt dieser Angriff allen Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn die zweite Münze \"Kopf\" gezeigt hat, ist das Verteidigende Pokémon jetzt verwirrt. Wenn die zweite Münze \"Zahl\" gezeigt hat, kann dein Gegner in seinem nächsten Zug keine Trainer-, Unterstützer- und Stadion-Karten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Megaphone",
				de: "Schallwelle"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277919
	}
}

export default card
