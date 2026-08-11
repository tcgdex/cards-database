import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
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
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Surprising Pattern",
				'fr-fr': "Motif Surprise",
				'es-es': "Diseño Sorprendente",
				'it-it': "Disegno Inaspettato",
				'pt-br': "Desenho Surpreendente",
				'de-de': "Überraschendes Muster"
			},
			effect: {
				'en-us': "Discard all Special Energy from each of your opponent’s Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie spéciale attachée à chacun des Pokémon de votre adversaire.",
				'es-es': "Descarta todas las Energías Especiales de cada uno de los Pokémon de tu rival.",
				'it-it': "Scarta tutte le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte todas as Energias Especiais de cada um dos Pokémon do seu oponente.",
				'de-de': "Lege alle Spezial-Energien von jedem Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Wing",
				'fr-fr': "Tornad’Aile",
				'es-es': "Ala Huracán",
				'it-it': "Ala Uragano",
				'pt-br': "Asa do Furacão",
				'de-de': "Hurrikanschwinge"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
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

	description: {
		'en-us': "Its wings and antennae don't cope well with moisture. After a rain, it faces sunward to dry off.",
	},

	thirdParty: {
		cardmarket: 361263,
		tcgplayer: 170826
	}
}

export default card
