import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		559,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
				es: "Contoneo",
				it: "Bullo",
				pt: "Arrogância",
				de: "Angeberei"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whap Down",
				fr: "Assommer",
				es: "Zurrar",
				it: "Bastonata",
				pt: "Golpe Ligeiro",
				de: "Verdreschen"
			},

			damage: 50,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388482
	}
}

export default card
