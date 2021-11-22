import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptera"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Prehistoric Memory",
				fr: "Mémoire préhistorique"
			},
			effect: {
				en: "Whenever an Evolved Pokémon attacks (even if it's your opponent's), it can use any attack from its Basic card or any Evolution card attached to it. It still has to pay for that attack's Energy cost. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
				fr: "Lorsqu'un Pokémon évolué attaque (même s'il s'agit de celui de votre adversaire), il peut utiliser n'importe quelle attaque de sa carte Pokémon de base ou de la carte Évolution qui lui est attachée. Il doit encore payer le coût en Énergie de l'attaque. Ce pouvoir cesse de fonctionner si Ptera est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Fly",
				fr: "Vol"
			},

			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Aerodactyl. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaque, y compris les dégâts, infligés à Ptera ; si c'est pile, cette attaque ne fait rien (pas même les dégâts)."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon vicieux surgi du passé, il semble qu'il volait en étalant ses ailes et en se laissant planer."
	}
}

export default card
