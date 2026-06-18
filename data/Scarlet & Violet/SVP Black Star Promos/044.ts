import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido",
			de: "Hitze-Tackle"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "MINAMINAMI Take",
	description: {
		en: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 715758,
				tcgplayer: 477182
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 715759,
				tcgplayer: 512036
			},
		}
	],
}

export default card
