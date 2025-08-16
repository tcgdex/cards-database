import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Heartfelt Song",
				fr: "Chanson du Cœur",
				es: "Canto Sincero",
				it: "Cantosincero",
				pt: "Canção Sincera",
				de: "Melodie des Herzens"
			},
			effect: {
				en: "Discard a Darkness Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie Darkness attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Darkness unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia Darkness assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia Darkness ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Darkness-Energie auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281424,
		tcgplayer: 86322
	}
}

export default card
