import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		es: "Rattata",
		de: "Rattfratz",
		it: "Rattata",
		pt: "Rattata"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		19
	],
	hp: 40,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				de: "Bodycheck",
				it: "Riduttore",
				pt: "Desmantelar"
			},
			damage: "30",
			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
				es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
				it: "Questo Pokémon infligge anche 10 danni a se stesso.",
				pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Shinya Komatsu",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684437,
		cardmarket: 877476
	}
}

export default card
