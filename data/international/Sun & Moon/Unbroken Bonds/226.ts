import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Whimsicott GX",
		'fr-fr': "Farfaduvet GX",
		'es-es': "Whimsicott GX",
		'it-it': "Whimsicott GX",
		'pt-br': "Whimsicott GX",
		'de-de': "Elfun GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 190,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet"
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fluffy Cotton",
				'fr-fr': "Coton Douillet",
				'es-es': "Algodón Mullido",
				'it-it': "Cotone Morbido",
				'pt-br': "Algodão Macio",
				'de-de': "Flauschwolle"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, prevenirá aquele dano.",
				'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Energy Blow",
				'fr-fr': "Coup d’Énergie",
				'es-es': "Golpe Energía",
				'it-it': "Soffioenergetico",
				'pt-br': "Golpe de Energia",
				'de-de': "Energieschlag"
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Toy Box GX",
				'fr-fr': "Coffre à Jouets GX",
				'es-es': "Caja de Juguetes GX",
				'it-it': "Scatola dei Giochi GX",
				'pt-br': "Caixa de Brinquedos GX",
				'de-de': "Spielzeugkiste GX"
			},
			effect: {
				'en-us': "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 5 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 5 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo fino a cinque carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por até 5 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 5 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372726,
		tcgplayer: 189240
	}
}

export default card
