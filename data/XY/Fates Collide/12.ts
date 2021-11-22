import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		it: "Braixen",
		pt: "Braixen",
		de: "Rutena"
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		654,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Destructive Flame",
				fr: "Flamme Destructrice",
				es: "Llama Destructiva",
				it: "Devastofiamma",
				pt: "Chama Destruidora",
				de: "Verzehrende Flamme"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crackling Ribbon",
				fr: "Ruban Crépitant",
				es: "Cinta Chispeante",
				it: "Lingua di fuoco",
				pt: "Fita de Fogo Crepitante",
				de: "Knisterndes Band"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
