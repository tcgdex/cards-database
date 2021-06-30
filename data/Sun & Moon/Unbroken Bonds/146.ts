import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		es: "Fearow",
		it: "Fearow",
		pt: "Fearow",
		de: "Ibitak"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Run Double",
				fr: "Double Tunnelier",
				es: "Taladradora Doble",
				it: "Doppio Giravvita",
				pt: "Furação Dupla",
				de: "Doppel-Schlagbohrer"
			},
			effect: {
				en: "Flip a coin. If heads, discard 2 Energy from your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 2 Energías del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta due Energie assegnate al Pokémon attivo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 2 Energias do Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
