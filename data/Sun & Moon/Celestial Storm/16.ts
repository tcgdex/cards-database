import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Surprising Pattern",
				fr: "Motif Surprise",
				es: "Diseño Sorprendente",
				it: "Disegno Inaspettato",
				pt: "Desenho Surpreendente",
				de: "Überraschendes Muster"
			},
			effect: {
				en: "Discard all Special Energy from each of your opponent’s Pokémon.",
				fr: "Défaussez toute l’Énergie spéciale attachée à chacun des Pokémon de votre adversaire.",
				es: "Descarta todas las Energías Especiales de cada uno de los Pokémon de tu rival.",
				it: "Scarta tutte le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				pt: "Descarte todas as Energias Especiais de cada um dos Pokémon do seu oponente.",
				de: "Lege alle Spezial-Energien von jedem Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Wing",
				fr: "Tornad’Aile",
				es: "Ala Huracán",
				it: "Ala Uragano",
				pt: "Asa do Furacão",
				de: "Hurrikanschwinge"
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

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
		cardmarket: 361263,
		tcgplayer: 170826
	}
}

export default card
