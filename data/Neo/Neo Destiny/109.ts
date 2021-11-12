import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Mewtwo",
		fr: "Mewtwo brillant"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Lightning",
			],
			name: {
				en: "Reflect Shield",
				fr: "Bouclier déflecteur"
			},
			effect: {
				en: "If an attack does damage to Shining Mewtwo during your opponent's next turn (even if Shining Mewtwo is Knocked Out), flip a coin. If heads, prevent all damage done to Shining Mewtwo from that attack (any other effects of attacks still happen) and do 20 damage to the attacking Pokémon.",
				fr: "Si une attaque inflige des dégâts à Mewtwo brillant pendant le prochain tour de votre adversaire (même si Mewtwo brillant est mis K.O.), lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Mewtwo brillant par cette attaque (Tous les autres effets dus à des attaques subsistent) et infligez 20 dégâts au Pokémon attaquant."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Fire",
			],
			name: {
				en: "Psyburst",
				fr: "Explosion psy"
			},
			effect: {
				en: "Discard a Energy card attached to Shining Mewtwo or this attack does nothing. This attack does 40 damage plus 10 damage for each Energy attached to the Defending Pokémon.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Mewtwo brillant ou cette attaque ne fait rien. Cette attaque inflige 40 dégâts plus 10 dégâts pour chaque Énergie attachée au Pokémon Défenseur."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il utilise ses pouvoirs psychiques surdéveloppés pour vaincre ses ennemis avant qu'ils n'aient le temps de réfléchir."
	}
}

export default card
