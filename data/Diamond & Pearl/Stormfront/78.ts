import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		fr: "Saquedeneu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ingrain",
				fr: "Racines",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, search your deck for a Grass Energy card and attach it to Tangela. Shuffle your deck afterward. If you do, prevent all effects of an attack, including damage, done to Tangela during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, cherchez dans votre deck une carte Énergie Grass et attachez-la à Saquedeneu. Ensuite, mélangez votre deck. Prévenez alors tous les effets d'une attaque, dégâts inclus, infligés à Saquedeneu lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				en: "Tickle",
				fr: "Chatouille",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il s'abrite derrière des lianes bleues. Nul n'a jamais vu le visage qu'elles dissimulent."
	}
}

export default card
