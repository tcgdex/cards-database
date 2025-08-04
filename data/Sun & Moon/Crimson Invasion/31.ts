import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Raichu",
		fr: "Raichu d’Alola",
		es: "Raichu de Alola",
		it: "Raichu di Alola",
		pt: "Raichu de Alola",
		de: "Alola-Raichu"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
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
		en: "Pikachu",
		fr: "Pikachu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Surge Surfer",
				fr: "Surf Caudal",
				es: "Cola Surf",
				it: "Codasurf",
				pt: "Cauda Surfista",
				de: "Surf-Schweif"
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
				fr: "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se c’è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				pt: "Se houver alguma carta de Estádio em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn mindestens 1 Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
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
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
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

	thirdParty: {
		cardmarket: 311881,
		tcgplayer: 149054
	}
}

export default card
