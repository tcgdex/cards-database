import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
		es: "Accelgor",
		it: "Accelgor",
		pt: "Accelgor",
		de: "Hydragil"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "Discard an Energy from this Pokémon and heal all damage from it.",
				fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
				it: "Scarta un’Energia assegnata a questo Pokémon e curalo da tutti i danni.",
				pt: "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide",
				es: "Ataque Fugaz",
				it: "Attacco Veloce",
				pt: "Ataque em Velocidade",
				de: "Tempoangriff"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311859
	}
}

export default card
