import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		fr: "Selutin",
		en: "Nacli",
		es: "Nacli",
		it: "Nacli",
		pt: "Nacli",
		de: "Geosali"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Couche de Sel",
			en: "Salt Coating",
			es: "Recubrimiento Salino",
			it: "Copertura di Sale",
			pt: "Camada de Sal",
			de: "Salzbeschichtung"
		},

		effect: {
			fr: "Soignez 20 dégâts de l'un de vos Pokémon.",
			en: "Heal 20 damage from 1 of your Pokémon.",
			es: "Cura 20 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano de 1 dos seus Pokémon.",
			de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715695,
				tcgplayer: 497623,
				cardtrader: 248872
			}
		},
	],

	illustrator: "Ryota Murayama",

	description: {
		en: "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},
}

export default card
