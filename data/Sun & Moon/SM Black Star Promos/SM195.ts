import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Charizard GX",
		fr: "Dracaufeu GX",
		es: "Charizard GX",
		it: "Charizard GX",
		pt: "Charizard GX",
		de: "Glurak GX"
	},

	illustrator: "Framestore",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Raging Destruction",
				fr: "Destruction Enragée",
				es: "Destrucción Furiosa",
				it: "Furiosa Distruzione",
				pt: "Destruição Devastadora",
				de: "Wütende Verwüstung"
			},
			effect: {
				en: "Discard the top 8 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 8 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
				es: "Descarta las 8 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a este Pokémon.",
				it: "Scarta le prime otto carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a questo Pokémon.",
				pt: "Descarte as 8 primeiras cartas do seu baralho. Se houver cartas de Energia Fire entre elas, ligue-as a este Pokémon.",
				de: "Lege die obersten 8 Karten von deinem Deck auf deinen Ablagestapel. Wenn unter jenen Karten Fire-Energiekarten sind, lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Artillery",
				fr: "Artillerie Vapeur",
				es: "Artillería de Vapor",
				it: "Artiglieria Vapore",
				pt: "Artilharia de Vapor",
				de: "Dampfgeschütz"
			},

			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dreadful Flames GX",
				fr: "Flammes Effroyables GX",
				es: "Llamas Espantosas GX",
				it: "Fiamma Terribile GX",
				pt: "Chamas Pavorosas GX",
				de: "Furchtbare Flammen GX"
			},
			effect: {
				en: "Discard an Energy from each of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 1 Energía de cada uno de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta un’Energia assegnata a ciascuno dei Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 1 Energia de cada um dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 1 Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4
}

export default card
