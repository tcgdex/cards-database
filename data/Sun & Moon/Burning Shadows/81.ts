import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
		es: "Rattata de Alola",
		it: "Rattata di Alola",
		pt: "Rattata de Alola",
		de: "Alola-Rattfratz"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Focus Energy",
				fr: "Puissance",
				es: "Foco Energía",
				it: "Focalenergia",
				pt: "Focalizar Energia",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Bite attack’s base damage is 60.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Morsure de ce Pokémon sont de 60.",
				es: "Durante tu próximo turno, el daño básico del ataque Mordisco de este Pokémon es de 60.",
				it: "Durante il tuo prossimo turno, i danni base dell’attacco Morso di questo Pokémon sono 60.",
				pt: "Durante a sua próxima vez de jogar, o dano base do ataque Mordida deste Pokémon será 60.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Biss dieses Pokémon 60 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299483,
		tcgplayer: 138569
	}
}

export default card
