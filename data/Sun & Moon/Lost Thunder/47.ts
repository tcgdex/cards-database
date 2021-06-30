import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				es: "Colmillo Ígneo",
				it: "Rogodenti",
				pt: "Presas de Fogo",
				de: "Feuerzahn"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Eruption",
				fr: "Éruption",
				es: "Estallido",
				it: "Eruzione",
				pt: "Erupção",
				de: "Eruption"
			},
			effect: {
				en: "Each player discards the top card of their deck. This attack does 60 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				es: "Cada jugador descarta la primera carta de su baraja. Este ataque hace 60 puntos de daño más por cada carta de Energía descartada de esta manera.",
				it: "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 60 danni in più per ogni carta Energia scartata in questo modo.",
				pt: "Cada jogador descarta a primeira carta do próprio baralho. Este ataque causa 60 pontos de dano a mais para cada carta de Energia descartada desta forma.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten Energiekarten zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
