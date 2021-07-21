import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Celesteela",
		fr: "Bamboiselle",
		es: "Celesteela",
		it: "Celesteela",
		pt: "Celesteela",
		de: "Kaguron"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		797,
	],
	hp: 140,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Raker",
				fr: "Ratissage Lunaire",
				es: "Misión Lunar",
				it: "Allunaggio",
				pt: "Missão Lunar",
				de: "Mondharke"
			},
			effect: {
				en: "If the total of both players’ remaining Prize cards is exactly 6, this attack can be used for Metal.",
				fr: "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
				es: "Si el total de cartas de Premio que les queden a ambos jugadores es exactamente 6, este ataque se puede usar por 1 Energía Metal.",
				it: "Se il totale delle carte Premio rimanenti a entrambi i giocatori è esattamente sei, il costo di questo attacco è Metal.",
				pt: "Se a soma total das cartas de Prêmio restantes de ambos os jogadores for exatamente 6, este ataque poderá ser usado com 1 Energia Metal.",
				de: "Wenn die Summe der verbleibenden Preiskarten beider Spieler genau 6 ist, kann diese Attacke für Metal eingesetzt werden."
			},
			damage: 160,

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
	retreat: 4,



}

export default card
