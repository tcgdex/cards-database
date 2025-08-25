import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
				es: "Descarrilar",
				it: "Deragliamento",
				pt: "Descarrilar",
				de: "Entgleisen"
			},
			effect: {
				en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidro Borrifada",
				de: "Hydroplatscher"
			},

			damage: 70,

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
		cardmarket: 288192,
		tcgplayer: 111520
	}
}

export default card
