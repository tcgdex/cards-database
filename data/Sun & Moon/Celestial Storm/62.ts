import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		338,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sunbeam",
				fr: "Rayon de Soleil",
				es: "Rayo de Sol",
				it: "Raggio di Sole",
				pt: "Raio de Sol",
				de: "Sonnenstrahl"
			},
			effect: {
				en: "The maximum HP of each of your Lunatone in play is 130.",
				fr: "Les PV maximum de chacun de vos Séléroc en jeu sont de 130.",
				es: "Los PS máximos de cada uno de tus Lunatone en juego son 130.",
				it: "I PS massimi di ognuno dei tuoi Lunatone in gioco diventano 130.",
				pt: "O PS máximo de cada Lunatone seu em jogo é 130.",
				de: "Die maximalen KP jedes deiner Lunastein im Spiel betragen 130."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scorching Light",
				fr: "Lumière Aveuglante",
				es: "Luz Desoladora",
				it: "Luce Ustionante",
				pt: "Luz Abrasadora",
				de: "Versengendes Licht"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed. If tails, your opponent’s Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato. Se esce croce, il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente será Queimado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
