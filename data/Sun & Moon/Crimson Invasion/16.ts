import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Escape",
				fr: "Évasion",
				es: "Escapada",
				it: "Fuga",
				pt: "Escapar",
				de: "Entkommen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
		},
	],
	attacks: [
		{
			cost: [
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

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
