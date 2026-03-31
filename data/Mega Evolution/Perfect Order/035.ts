import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		de: "Parfi",
		it: "Spritzee",
		pt: "Spritzee"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		682
	],
	hp: 70,
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
				en: "Sweet Scent",
				fr: "Doux Parfum",
				es: "Dulce Aroma",
				de: "Lockduft",
				it: "Profumino",
				pt: "Aroma Doce"
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
				es: "Cura 30 puntos de daño a uno de tus Pokémon.",
				de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
				it: "Cura uno dei tuoi Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano de 1 dos seus Pokémon."
			}
		},
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				de: "Ramme",
				it: "Carica",
				pt: "Aríete"
			},
			damage: "10"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Pani Kobayashi",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684420,
		cardmarket: 877449
	}
}

export default card
