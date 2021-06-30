import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tag Transport",
				fr: "Porte-Escouade",
				es: "Transporte Relevo",
				it: "Trasporto Alleato",
				pt: "Transporte de Aliados",
				de: "Team-Transport"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active TAG TEAM Pokémon with 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon ESCOUADE Actif avec l’un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon de equipo de RELEVOS Activo por 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon ALLEATI attivo con uno dei tuoi Pokémon in panchina.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon ALIADOS Ativo por 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Aktives TAG TEAM Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
				es: "Ataque Giratorio",
				it: "Attacco Rotante",
				pt: "Ataque Giratório",
				de: "Rundumangriff"
			},

			damage: 70,

		},
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
	retreat: 1,



}

export default card
