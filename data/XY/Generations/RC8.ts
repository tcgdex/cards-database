import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Froslass",
		fr: "Momartik",
		de: "Frosdedje"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		de: "Schneppke"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drag Along",
				fr: "Traînée",
				de: "Mitschleppen"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden eines gegnerischen Angriffs kampfunfähig wird, wirf 1 Münze. Bei „Kopf“ wird das Angreifende Pokémon kampfunfähig."
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
				en: "Snowy Drop",
				fr: "Chute Enneigée",
				de: "Schneefall"
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				de: "Verteile 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Spring is already here, so goodbye…",
		de: "Der Frühling ist schon da. Ich verabschiede mich!"
	},

	thirdParty: {
		cardmarket: 288517
	}
}

export default card
