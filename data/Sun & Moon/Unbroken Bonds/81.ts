import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		it: "Marshadow",
		pt: "Marshadow",
		de: "Marshadow"
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Resetting Hole",
				fr: "Trou de Réinitialisation",
				es: "Agujero Reinicio",
				it: "Vuoto Azzerante",
				pt: "Buraco de Recomposição",
				de: "Schluckloch"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard any Stadium card in play. If you do, discard this Pokémon and all cards attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toute carte Stade en jeu. Dans ce cas, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes descartar cualquier carta de Estadio en juego. Si lo haces, descarta este Pokémon y todas las cartas unidas a él.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scartare una carta Stadio in gioco. Se lo fai, scarta questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá descartar qualquer carta de Estádio em jogo. Se fizer isto, descarte este Pokémon e todas as cartas ligadas a ele.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, lege dieses Pokémon und alle an es angelegten Karten auf deinen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Red Knuckles",
				fr: "Poings Rouges",
				es: "Nudillos Rojos",
				it: "Pugni Rossi",
				pt: "Punhos Vermelhos",
				de: "Rote Knöchel"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Ultra Beast, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Ultraente, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un’Ultracreatura, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for uma Ultracriatura, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners eine Ultrabestie ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
