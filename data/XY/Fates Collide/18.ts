import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		es: "Omastar",
		it: "Omastar",
		pt: "Omastar",
		de: "Amoroso"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Restoring Beam",
				fr: "Rayon Réparateur",
				es: "Rayo Recreador",
				it: "Raggio Ricreante",
				pt: "Raio Restaurador",
				de: "Erweckungsstrahl"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Recréé dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja un Pokémon Recreado y ponerlo en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Ricreato e metterlo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar em seu baralho um Pokémon Restaurado e colocá-lo no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Erweckt-Pokémon durchsuchen und auf deine Bank legen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
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

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
