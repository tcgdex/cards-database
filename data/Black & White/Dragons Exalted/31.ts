import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
		es: "Walrein",
		it: "Walrein",
		pt: "Walrein",
		de: "Walraisa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
		de: "Seejong"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				de: "Aurorastrahl"
			},

			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Entomb",
				fr: "Cercueil de Glace",
				de: "Eisiger Kerker"
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed. This Pokémon can't use Ice Entomb during your next turn.",
				fr: "Le Pokémon Défenseur est maintenant Paralysé. Ce Pokémon ne peut pas utiliser Cercueil de Glace pendant votre prochain tour.",
				de: "Das Verteidigende Pokémon ist jetzt paralysiert. Dieses Pokémon kann während deines nächsten Zuges Eisiger Kerker nicht einsetzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "It shatters ice with its big tusks. Its thick blubber repels not only the cold, but also enemy attacks.",
		de: "Mit seinen Stoßzähnen bricht es durch Eis. Eine Speckschicht schützt es vor Kälte und Angriffen."
	},

	thirdParty: {
		cardmarket: 280470,
		tcgplayer: 90469
	}
}

export default card
