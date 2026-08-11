import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		765,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Instruct",
				'fr-fr': "Sommation",
				'es-es': "Mandato",
				'it-it': "Imposizione",
				'pt-br': "Instrução",
				'de-de': "Kommando"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 3 cards in your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 3 cartes en main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 3 cartas en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere tre carte in mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar cartas até ter 3 cartas na sua mão.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast."
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
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "Deep in the jungle, high in the lofty canopy, this Pokémon abides. On rare occasions, it shows up at the beach to match wits with Slowking.",
	},
}

export default card
