import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wondrous Gift",
				fr: "Cadeau Merveilleux",
				es: "Regalo Extraordinario",
				it: "Dono Meraviglioso",
				pt: "Presente Admirável",
				de: "Wundersame Gabe"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put an Item card from your discard pile on top of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte Objet de votre pile de défausse sur le dessus de votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, pon 1 carta de Objeto de tu pila de descartes en la parte superior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, prendi una carta Strumento dalla tua pila degli scarti e mettila in cima al tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, coloque 1 carta de Item da sua pilha de descarte como a primeira carta do seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Lege bei Kopf 1 Itemkarte aus deinem Ablagestapel oben auf dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Mist Guard",
				fr: "Bruine Gardienne",
				es: "Niebla Protectora",
				it: "Guardia Nebulosa",
				pt: "Névoa Protetora",
				de: "Dunstschutz"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Dragon Pokémon during your opponent’s next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Dragon pendant le prochain tour de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de Pokémon Dragon durante el próximo turno de tu rival.",
				it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Dragon durante il prossimo turno del tuo avversario.",
				pt: "Prevenirá todo o dano causado a este Pokémon por ataques dos Pokémon Dragon durante a próxima vez de jogar do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Dragon-Pokémon zugefügt wird."
			},
			damage: 70,

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
