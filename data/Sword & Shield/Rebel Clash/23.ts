import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Appletun",
		fr: "Dratatin",
		es: "Appletun",
		it: "Appletun",
		pt: "Appletun",
		de: "Schlapfel"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Applin",
		fr: "Verpom"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Delicious Aroma",
				fr: "Arôme Délicieux",
				es: "Aroma Delicioso",
				it: "Aroma Delizioso",
				pt: "Aroma Delicioso",
				de: "Köstliches Aroma"
			},
			effect: {
				en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent’s Benched Basic Pokémon with their Active Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif.",
				es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon Básicos en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante o seu turno, você poderá jogar 1 moeda. Se sair cara, troque 1 dos Pokémon Básicos no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Einmal während deines Zuges kannst du 1 Münze werfen. Tausche bei Kopf 1 Basis-Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Eating a sweet apple caused its evolution. A nectarous scent wafts from its body, luring in the bug Pokémon it preys on."
	}
}

export default card
