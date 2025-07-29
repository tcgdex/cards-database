import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				es: "Recuperación",
				it: "Ripresa",
				pt: "Recuperação",
				de: "Genesung"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon and heal all damage from it.",
				fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon y cura todos sus puntos de daño.",
				it: "Scarta un'Energia assegnata a questo Pokémon e curalo da tutti i danni.",
				pt: "Descarte uma Energia ligada a este Pokémon e cure todos os danos desse Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel und heile allen Schaden bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Splash",
				fr: "Trempe-Cœur",
				es: "Núcleo Salpicadura",
				it: "Nucleosplash",
				pt: "Núcleo Borrifante",
				de: "Kernplatscher"
			},
			effect: {
				en: "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 30 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 30 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Psychic ligada a ele, esse ataque causará 30 de danos adicionais.",
				de: "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281371
	}
}

export default card
