import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat",
		de: "Miezunder"
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		726,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				es: "Golpes Furia",
				it: "Sfuriate",
				pt: "Golpes de Fúria",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
