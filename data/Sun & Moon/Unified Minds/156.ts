import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grind Up",
				fr: "Mouture",
				es: "Machacar",
				it: "Macina",
				pt: "Macerar",
				de: "Zermahlen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, attach up to 3 in any combination of Fire and Metal Energy cards from your hand to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, attachez une combinaison d’un maximum de 3 cartes Énergie Fire ou Metal de votre main à ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar cualquier carta de Estadio en juego. Si lo haces, une hasta 3 cartas de Energía Fire y Metal, en cualquier combinación, de tu mano a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Stadio in gioco. Se lo fai, assegna fino a tre carte Energia Fire e Metal, in qualsiasi combinazione, dalla tua mano a questo Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar qualquer carta de Estádio em jogo. Se fizer isto, ligue até 3 cartas de Energia Fire e Energia Metal da sua mão a este Pokémon em qualquer combinação.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, lege eine beliebige Kombination aus bis zu 3 Fire- und Metal-Energiekarten aus deiner Hand an dieses Pokémon an."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				en: "Powerful Axe",
				fr: "Hache Puissante",
				es: "Hacha Poderosa",
				it: "Ascia Portentosa",
				pt: "Machado Poderoso",
				de: "Kraftaxt"
			},
			effect: {
				en: "This attack does 40 more damage times the amount of basic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies de base attachées à ce Pokémon.",
				es: "Este ataque hace 40 puntos de daño más por cada Energía Básica unida a este Pokémon.",
				it: "Questo attacco infligge 40 danni in più per ogni Energia base assegnata a questo Pokémon.",
				pt: "Este ataque causa 40 pontos de dano a mais vezes a quantidade de Energia básica ligada a este Pokémon.",
				de: "Diese Attacke fügt 40 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Basis-Energien zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
