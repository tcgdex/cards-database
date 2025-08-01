import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Naganadel GX",
		fr: "Mandrillon GX",
		es: "Naganadel GX",
		it: "Naganadel GX",
		pt: "Naganadel GX",
		de: "Agoyon GX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		804,
	],

	hp: 210,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Conversion",
				fr: "Ultra-Conversion",
				es: "Ultraconversión",
				it: "Trasformazione Ultra",
				pt: "Ultraconversão",
				de: "Ultrawandlung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard an Ultra Beast card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Ultra-Chimère de votre main. Dans ce cas, piochez 3 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Ultraente de tu mano. Si lo haces, roba 3 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Ultracreatura che hai in mano. Se lo fai, pesca tre carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Ultracriatura da sua mão. Se fizer isto, compre 3 cartas.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Ultrabestien-Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venom Shot",
				fr: "Tir Venin",
				es: "Disparo Veneno",
				it: "Velencolpo",
				pt: "Disparo de Veneno",
				de: "Toxinschuss"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. This attack does 170 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 170 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 2 Energías de este Pokémon. Este ataque hace 170 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta due Energie assegnate a questo Pokémon. Questo attacco infligge 170 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 2 Energias deste Pokémon. Este ataque causa 170 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 170 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Injection GX",
				fr: "Injection GX",
				es: "Inyección GX",
				it: "Inoculazione GX",
				pt: "Injeção GX",
				de: "Injektion GX"
			},
			effect: {
				en: "Add a card from your opponent’s discard pile to their Prize cards face down. (You can’t use more than 1 GX attack in a game.)",
				fr: "Ajoutez une carte de la pile de défausse de votre adversaire à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Añade, boca abajo, 1 carta de la pila de descartes de tu rival a sus cartas de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi una carta dalla pila degli scarti del tuo avversario e aggiungila alle sue carte Premio a faccia in giù. Non puoi usare più di un attacco GX a partita.",
				pt: "Adicione 1 carta da pilha de descarte do seu oponente às cartas de Prêmio dele(a) virada para baixo (você não pode usar mais de 1 ataque GX por partida).",
				de: "Füge 1 Karte aus dem Ablagestapel deines Gegners verdeckt seinen Preiskarten hinzu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 378873
	}
}

export default card
