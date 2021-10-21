import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon",
		fr: "Prismillon",
		es: "Vivillon",
		it: "Vivillon",
		pt: "Vivillon",
		de: "Vivillon"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
		es: "Spewpa",
		it: "Spewpa",
		pt: "Spewpa",
		de: "Puponcho"
	},

	attacks: [{
		name: {
			en: "Vital Powder",
			fr: "Poudre Vitale",
			es: "Polvo Vital",
			it: "Pulviscoppio Vitale",
			pt: "Pó Vital",
			de: "Vitalpuder"
		},

		effect: {
			en: "Heal all damage from 2 of your Benched Pokémon.",
			fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc.",
			es: "Cura todos los puntos de daño a 2 de tus Pokémon en Banca.",
			it: "Cura due dei tuoi Pokémon in panchina da tutti i danni.",
			pt: "Cure todo o dano de 2 dos seus Pokémon no Banco.",
			de: "Heile allen Schaden bei 2 Pokémon auf deiner Bank."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales."
	}
}

export default card
