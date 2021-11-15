import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Gloom",
		fr: "Ortide obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Pollen Stench",
				fr: "Pollen puant"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Confused; if tails, your Active Pokémon is now Confused. This power can't be used if Dark Gloom is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus ; si c'est pile, votre Pokémon Actif est maintenant Confus. Ce pouvoir ne peut être utilisé si Ortide obscur est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Son pollen sent si fort qu'il s'étourdit parfois lui-même."
	}
}

export default card
