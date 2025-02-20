import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Giratina ◇",
		fr: "Giratina ◇",
		es: "Giratina ◇",
		it: "Giratina ◇",
		pt: "Giratina ◇",
		de: "Giratina ◇"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 160,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Chaotic Star",
				fr: "Étoile Chaotique",
				es: "Estrella Caótica",
				it: "Stella del Caos",
				pt: "Estrela do Caos",
				de: "Chaosstern"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Psychic Energy cards from your hand to it.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Psychic de votre main.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes unirle 2 cartas de Energía Psychic de tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli due carte Energia Psychic dalla tua mano.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode ligar 2 cartas de Energia Psychic da sua mão a ele.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 2 Psychic-Energiekarten aus deiner Hand an es anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Crisis Dive",
				fr: "Plongeon Critique",
				es: "Crisis en Picado",
				it: "Picchiata Critica",
				pt: "Mergulho de Calamidade",
				de: "Krisensprung"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
