import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rip Claw",
				fr: "Griffe Déchirante",
				es: "Garra Arrebatadora",
				it: "Strappartiglio",
				pt: "Garra Dilacerante",
				de: "Reißklaue"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Doom Crush",
				fr: "Écrasement Tragique",
				es: "Presión Trágica",
				it: "Schianto Avverso",
				pt: "Esmagamento Sinistro",
				de: "Verhängnisvoller Zermalmer"
			},
			effect: {
				en: "Discard a Darkness Energy from this Pokémon.",
				fr: "Défaussez une Énergie Darkness de ce Pokémon.",
				es: "Descarta 1 Energía Darkness de este Pokémon.",
				it: "Scarta un’Energia Darkness assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Darkness deste Pokémon.",
				de: "Lege 1 Darkness-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

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



}

export default card
