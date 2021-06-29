import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
	},

	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burst Punch",
				fr: "Poing d’Enfer",
				es: "Puño Explosivo",
				it: "Fiammatapugno",
				pt: "Soco Rajada",
				de: "Explosionshieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ground Burn",
				fr: "Brûlure au Sol",
				es: "Quemar Suelo",
				it: "Bruciaterra",
				pt: "Queimar o Solo",
				de: "Bodenbrand"
			},
			effect: {
				en: "Each player discards the top card of their deck. This attack does 100 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				es: "Cada jugador descarta la primera carta de su baraja. Este ataque hace 100 puntos de daño más por cada carta de Energía descartada de esta manera.",
				it: "Ciascun giocatore scarta la prima carta del proprio mazzo. Questo attacco infligge 100 danni in più per ogni carta Energia scartata in questo modo.",
				pt: "Cada jogador descarta a carta de cima do próprio baralho. Este ataque causa 100 pontos de dano a mais para cada carta de Energia descartada desta forma.",
				de: "Jeder Spieler legt die oberste Karte seines Decks auf seinen Ablagestapel. Diese Attacke fügt für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 100 Schadenspunkte mehr zu."
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

	retreat: 3,
	hp: 140,
	types: ["Fire"],
	regulationMark: "D"
}

export default card
