import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Yawn",
				fr: "Bâillement",
				es: "Bostezo",
				it: "Sbadiglio",
				pt: "Bocejo",
				de: "Gähner"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Three Strikes",
				fr: "Triple Risque",
				es: "Tres Intentos",
				it: "Terzo Strike",
				pt: "Aposta Tripla",
				de: "Brillante Wette"
			},
			effect: {
				en: "Flip 3 coins. This attack does 100 damage for each heads. If all of them are tails, you lose this game.",
				fr: "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face. S’il n’y a que des côtés pile, vous perdez cette partie.",
				es: "Lanza 3 monedas. Este ataque hace 100 puntos de daño por cada cara. Si sale cruz en las 3, pierdes esta partida.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa. Se esce croce tutte e tre le volte, hai perso la partita.",
				pt: "Jogue 3 moedas. Este ataque causa 100 pontos de dano para cada cara. Se todas saírem coroa, você perderá esta partida.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu. Wenn alle Zahl zeigen, verlierst du dieses Spiel."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372334,
		tcgplayer: 189142
	}
}

export default card
