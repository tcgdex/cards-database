import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
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
				en: "Focus Energy",
				fr: "Puissance",
				es: "Foco Energía",
				it: "Focalenergia",
				pt: "Focalizar Energia",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, this Pokémon's Flop attack's base damage is 50.",
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Flop de ce Pokémon sont de 50.",
				es: "Durante tu próximo turno, el daño básico del ataque Vuelta de este Pokémon es de 50.",
				it: "Durante il tuo prossimo turno, i danni base dell'attacco Tonfo di questo Pokémon sono 50.",
				pt: "Durante sua próxima vez de jogar, o dano base do ataque Baque deste Pokémon será 50.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Plumps dieses Pokémon 50 Schadenspunkte."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flop",
				fr: "Flop",
				es: "Vuelta",
				it: "Tonfo",
				pt: "Baque",
				de: "Plumps"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291622,
		tcgplayer: 121141
	}
}

export default card
