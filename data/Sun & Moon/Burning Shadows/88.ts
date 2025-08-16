import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Darkrai GX",
		fr: "Darkrai GX",
		es: "Darkrai GX",
		it: "Darkrai GX",
		pt: "Darkrai GX",
		de: "Darkrai GX"
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
				en: "Restoration",
				fr: "Renouveau",
				es: "Resurgimiento",
				it: "Restaurazione",
				pt: "Restauração",
				de: "Restauration"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. Then, attach a Darkness Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Ensuite, attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en tu Banca. Después, une 1 carta de Energía Darkness de tu pila de descartes a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo in panchina. Poi, assegnagli una carta Energia Darkness dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você poderá colocá-lo no seu Banco. Em seguida, ligue 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon in deinem Ablagestapel befindet, kannst du es auf deine Bank legen. Lege anschließend 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Dark Cleave",
				fr: "Pénombre Pourfendue",
				es: "Hendidura Oscura",
				it: "Fendente Oscuro",
				pt: "Fenda Obscura",
				de: "Dunkle Spaltung"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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
				en: "Dead End GX",
				fr: "Sans Issue GX",
				es: "Sin Retorno GX",
				it: "Vicolo Cieco-GX",
				pt: "Sem Saída GX",
				de: "Sackgasse GX"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, that Pokémon is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, ce dernier est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, ese Pokémon queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, quel Pokémon viene messo KO. Non puoi usare più di un attacco GX a partita.",
				pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, ist jenes Pokémon kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
	}
}

export default card
