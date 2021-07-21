import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Gardevoir-GX",
		fr: "Gardevoir-GX",
		es: "Gardevoir-GX",
		it: "Gardevoir-GX",
		pt: "Gardevoir-GX",
		de: "Guardevoir-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 230,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Spring",
				fr: "Rebond Secret",
				es: "Manantial Secreto",
				it: "Sorgente Segreta",
				pt: "Quicada Secreta",
				de: "Geheime Quelle"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Fairy de tu mano a 1 de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon una carta Energia Fairy dalla tua mano.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Fairy da sua mão a 1 dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Fairy-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Infinite Force",
				fr: "Force Infinie",
				es: "Fuerza Infinita",
				it: "Forza Infinita",
				pt: "Força Infinita",
				de: "Unendliche Macht"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
				es: "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				it: "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				pt: "Este ataque causa 30 pontos de dano vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Twilight GX",
				fr: "Tombée de la Nuit GX",
				es: "Crepúsculo GX",
				it: "Crepuscolo-GX",
				pt: "Crepúsculo GX",
				de: "Zwielicht GX"
			},
			effect: {
				en: "Shuffle 10 cards from your discard pile into your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 10 cartas de tu pila de descartes en tu baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Rimischia dieci carte dalla tua pila degli scarti nel tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Embaralhe 10 cartas da sua pilha de descarte no seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Mische 10 Karten aus deinem Ablagestapel in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
	retreat: 2,



}

export default card
