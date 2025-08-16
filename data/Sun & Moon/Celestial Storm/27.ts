import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		it: "Combusken",
		pt: "Combusken",
		de: "Jungglut"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double Pied",
				es: "Doble Patada",
				it: "Doppiocalico",
				pt: "Chute Duplo",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

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
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361274,
		tcgplayer: 170840
	}
}

export default card
