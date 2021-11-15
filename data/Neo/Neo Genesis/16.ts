import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togepi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Metronome",
				fr: "Super métronome"
			},
			effect: {
				en: "Flip a coin. If heads, choose an attack of 1 of your opponent's Pokémon. Super Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic's type is still .) Togetic performs that attack. (Togetic can make that attack even if it does not have the appropriate number or type of Energy attached to it necessary to make the attack.)",
				fr: "Lancez une pièce. Si c'est face, choisissez une attaque d'un des Pokémon de votre adversaire. Super Métronome copie cette attaque à l'exception de son coût en Énergie. (Vous devez toujours accomplir les autres actions afin d'utiliser cette attaque.) (Quel que soit le type du Pokémon Défenseur, Togetic reste .) Togetic accomplie cette attaque. (Togetic peut accomplir l'attaque même s'il ne possède pas le nombre d'Énergies requises pour faire cette attaque.)"
			},

		},
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
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Togetic; if tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Togetic ; si c'est pile, cette attaque ne fait rien (pas même les dégâts)."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "On prétend qu'il se manifeste auprès des gens généreux et bienfaisants, et les couvre de bonheur."
	}
}

export default card
