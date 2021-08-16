import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Whimsicott GX",
		fr: "Farfaduvet GX",
		es: "Whimsicott GX",
		it: "Whimsicott GX",
		pt: "Whimsicott GX",
		de: "Elfun GX"
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
		en: "Cottonee",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fluffy Cotton",
				fr: "Coton Douillet",
				es: "Algodón Mullido",
				it: "Cotone Morbido",
				pt: "Algodão Macio",
				de: "Flauschwolle"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
				es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
				it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, prevenirá aquele dano.",
				de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Energy Blow",
				fr: "Coup d’Énergie",
				es: "Golpe Energía",
				it: "Soffioenergetico",
				pt: "Golpe de Energia",
				de: "Energieschlag"
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia ligada a este Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Toy Box GX",
				fr: "Coffre à Jouets GX",
				es: "Caja de Juguetes GX",
				it: "Scatola dei Giochi GX",
				pt: "Caixa de Brinquedos GX",
				de: "Spielzeugkiste GX"
			},
			effect: {
				en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja hasta 5 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo fino a cinque carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por até 5 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach bis zu 5 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 1
}

export default card
