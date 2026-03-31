import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		de: "Psiau",
		it: "Espurr",
		pt: "Espurr"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		677
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Nap",
				fr: "Tit'Sieste",
				es: "Siesta",
				de: "Nickerchen",
				it: "Pausa",
				pt: "Soneca"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts de ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon."
			}
		},
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				de: "Zertrampeln",
				it: "Fuggi Fuggi",
				pt: "Estouro"
			},
			damage: "10"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Terada Tera",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684417,
		cardmarket: 877447
	}
}

export default card
