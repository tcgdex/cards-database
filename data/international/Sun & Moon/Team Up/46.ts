import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Nuzzly Gathering",
				'fr-fr': "Rassemblement Frimousse",
				'es-es': "Reunión Estática",
				'it-it': "Raduno Coccoloso",
				'pt-br': "Encontro de Chamegos",
				'de-de': "Wangenrubbler-Treffen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Pokémon that has the Nuzzle attack, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon avec l’attaque Frotte-Frimousse, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Pokémon que tenga el ataque Moflete Estático, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon che abbia l’attacco Elettrococcola, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 Pokémon que tenha o ataque Chamego no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Pokémon, das die Attacke Wangenrubbler hat, durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Nuzzle",
				'fr-fr': "Frotte-Frimousse",
				'es-es': "Moflete Estático",
				'it-it': "Elettrococcola",
				'pt-br': "Chamego",
				'de-de': "Wangenrubbler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It grills berries and bug Pokémon with electric shocks and makes a meal of them. It usually nests in the holes gouged in trees by Pikipek.",
	},

	thirdParty: {
		cardmarket: 368977,
		tcgplayer: 183821
	}
}

export default card
