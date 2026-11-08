import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Darkrai GX",
		'fr-fr': "Darkrai GX",
		'es-es': "Darkrai GX",
		'it-it': "Darkrai GX",
		'pt-br': "Darkrai GX",
		'de-de': "Darkrai GX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Restoration",
				'fr-fr': "Renouveau",
				'es-es': "Resurgimiento",
				'it-it': "Restaurazione",
				'pt-br': "Restauração",
				'de-de': "Restauration"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. Then, attach a Darkness Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Ensuite, attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Después, une 1 carta de Energía Darkness de tu pila de descartes a este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo in panchina. Poi, assegnagli una carta Energia Darkness dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Em seguida, ligue 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon in deinem Ablagestapel befindet, kannst du es auf deine Bank legen. Lege anschließend 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Cleave",
				'fr-fr': "Pénombre Pourfendue",
				'es-es': "Hendidura Oscura",
				'it-it': "Fendente Oscuro",
				'pt-br': "Fenda Obscura",
				'de-de': "Dunkle Spaltung"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 130,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dead End GX",
				'fr-fr': "Sans Issue GX",
				'es-es': "Sin Retorno GX",
				'it-it': "Vicolo Cieco-GX",
				'pt-br': "Sem Saída GX",
				'de-de': "Sackgasse GX"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is affected by a Special Condition, that Pokémon is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, ce dernier est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, quel Pokémon viene messo KO. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299490,
		tcgplayer: 138578
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	]
}

export default card
