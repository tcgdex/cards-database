import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Crèmy",
		en: "Milcery",
		es: "Milcery",
		it: "Milcery",
		pt: "Milcery",
		de: "Hokumil"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Aromathérapie",
			en: "Aromatherapy",
			es: "Aromaterapia",
			it: "Aromaterapia",
			pt: "Aromaterapia",
			de: "Aromakur"
		},

		effect: {
			fr: "Soignez 10 dégâts de chacun de vos Pokémon.",
			en: "Heal 10 damage from each of your Pokémon.",
			es: "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "This Pokémon was born from sweet-smelling particles in the air. Its body is made of cream."
	}
}

export default card