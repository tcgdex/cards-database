import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Alolan Raichu",
		'fr-fr': "Raichu d’Alola",
		'es-es': "Raichu de Alola",
		'it-it': "Raichu di Alola",
		'pt-br': "Raichu de Alola",
		'de-de': "Alola-Raichu"
	},
	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Surge Surfer",
				'fr-fr': "Surf Caudal",
				'es-es': "Cola Surf",
				'it-it': "Codasurf",
				'pt-br': "Cauda Surfista",
				'de-de': "Surf-Schweif"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se c’è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este Pokémon não terá custo de Recuo.",
				'de-de': "Wenn mindestens 1 Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
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
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "70+",

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "It only evolves to this form in the Alola region. According to researchers, its diet is one of the causes of this change.",
	},
}

export default card
