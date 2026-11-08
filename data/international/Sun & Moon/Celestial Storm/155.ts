import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Electrode GX",
		'fr-fr': "Électrode GX",
		'es-es': "Electrode GX",
		'it-it': "Electrode GX",
		'pt-br': "Electrode GX",
		'de-de': "Lektrobal GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 190,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Extra Energy Bomb",
				'fr-fr': "Bombe Extra-Énergétique",
				'es-es': "Bomba Extraenergética",
				'it-it': "Extra Enerbomba",
				'pt-br': "Bomba de Energia Extra",
				'de-de': "Extra Energiebombe"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach 5 Energy cards from your discard pile to your Pokémon, except Pokémon-GX or Pokémon-EX, in any way you like. If you do, this Pokémon is Knocked Out.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher 5 cartes Énergie de votre pile de défausse à vos Pokémon, à l’exception des Pokémon-GX et Pokémon-EX, de la manière que vous voulez. Dans ce cas, ce Pokémon est mis K.O.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 5 cartas de Energía de tu pila de descartes a tus Pokémon, excepto a tus Pokémon-GX o Pokémon-EX, de la manera que desees. Si lo haces, este Pokémon queda Fuera de Combate.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a piacimento ai tuoi Pokémon, a eccezione dei Pokémon-GX e dei Pokémon-EX, cinque carte Energia dalla tua pila degli scarti. Se lo fai, questo Pokémon viene messo KO.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 5 cartas de Energia da sua pilha de descarte aos seus Pokémon, exceto por Pokémon-GX ou Pokémon-EX, como desejar. Se fizer isto, este Pokémon será Nocauteado.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 5 Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon, außer Pokémon-GX oder Pokémon-EX, anlegen. Wenn du das machst, ist dieses Pokémon kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Crush and Burn GX",
				'fr-fr': "Écra-Brûle GX",
				'es-es': "Arrasar y Quemar GX",
				'it-it': "Spacca e Brucia-GX",
				'pt-br': "Esmagar e Queimar GX",
				'de-de': "Falten und Frittieren GX"
			},
			effect: {
				'en-us': "Discard any amount of Energy from your Pokémon. This attack does 50 more damage for each card you discarded in this way. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez n’importe quel nombre d’Énergies de vos Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta tutte le Energie che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 50 pontos de dano a mais para cada carta descartada desta forma (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "30+",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 361392,
		tcgplayer: 170866
	}
}

export default card
