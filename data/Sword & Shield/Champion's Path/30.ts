import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup Déchirant",
				es: "Golpe Cuchillazo",
				it: "Lacerattacco",
				pt: "Ataque Cortante",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Slashing Strike.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The rocks in its mane are sharper than a knife. Fragments that break off are treasured as good luck charms."
	}
}

export default card
