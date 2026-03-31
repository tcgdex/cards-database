import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		495
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass"
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
				es: "Carga Descuidada",
				de: "Waghalsiger Sturmangriff",
				it: "Carica Avventata",
				pt: "Carga Indomável"
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
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Narumi Sato",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684400,
		cardmarket: 877416
	}
}

export default card
