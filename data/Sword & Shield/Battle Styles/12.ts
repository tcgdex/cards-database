import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Spewpa",
		fr: "Pérégrain",
		es: "Spewpa",
		it: "Spewpa",
		pt: "Spewpa",
		de: "Puponcho"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille"
	},

	attacks: [{
		name: {
			en: "Grass Cocooning",
			fr: "Cocon Vert",
			es: "Abrigo Planta",
			it: "Erbocorazza",
			pt: "Casulo de Grama",
			de: "Pflanzenhülle"
		},

		effect: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts de ce Pokémon.",
			es: "Cura 40 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 40 danni.",
			pt: "Cure 40 pontos de dano deste Pokémon.",
			de: "Heile 40 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card