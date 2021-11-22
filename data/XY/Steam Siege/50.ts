import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sinister Selection",
				fr: "Sélection Sinistre",
				es: "Selección Siniestra",
				it: "Sceltasinistra",
				pt: "Seleção Sinistra",
				de: "Unheimliche Auswahl"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et ajouter l'une d'entre elles à votre main. Défaussez l'autre carte.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Descarta la otra carta.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Scarta l'altra carta.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode ver 2 cards de cima do seu baralho e colocar 1 deles na sua mão. Descarte o outro card.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Decks anschauen und 1 davon auf deine Hand nehmen. Lege die andere Karte auf deinen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Past Friends",
				fr: "Amis d'Antan",
				es: "Amigos del Pasado",
				it: "Vecchie Amicizie",
				pt: "Amigos do Passado",
				de: "Erloschene Freunde"
			},
			effect: {
				en: "This attack does 10 more damage for each Supporter card in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse.",
				es: "Este ataque hace 10 puntos de daño más por cada carta de Partidario en tu pila de descartes.",
				it: "Questo attacco infligge 10 danni in più per ogni carta Aiuto nella tua pila degli scarti.",
				pt: "Este ataque causa 10 de danos adicionais para cada card de Apoiador na sua pilha de descarte.",
				de: "Dieser Angriff fügt für jede Unterstützerkarte in deinem Ablagestapel 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
