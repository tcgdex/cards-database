import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 40 or less.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 40 ou moins.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch einen Angriff 40 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				de: "Kopfnuss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its ear is hexagonal in shape. Compressed underground, its body is as hard as steel.",
		de: "Hat ein sechseckiges Ohr. Sein durch das Erdreich gepresster Körper steht Stahl in Sachen Härte in nichts nach."
	},

	thirdParty: {
		cardmarket: 280014,
		tcgplayer: 88805
	}
}

export default card
