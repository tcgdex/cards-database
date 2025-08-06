import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Zeraora",
		fr: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		pt: "Zeraora",
		de: "Zeraora"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		807,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Crushing Claw",
				fr: "Griffe Écrasante",
				es: "Garra Devastadora",
				it: "Triturartigli",
				pt: "Garra Pulverizadora",
				de: "Vernichtende Kralle"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Discharge",
				fr: "Coup d’Jus",
				es: "Chispazo",
				it: "Scarica",
				pt: "Descarga",
				de: "Ladungsstoß"
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta todas las Energías Lightning de este Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Lightning deste Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372256,
		tcgplayer: 189161
	}
}

export default card
