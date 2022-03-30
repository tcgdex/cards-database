import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Ampharos EX",
		fr: "Pharamp EX",
		es: "Ampharos EX",
		it: "Ampharos EX",
		pt: "Ampharos EX",
		de: "Ampharos EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Rod",
				fr: "Parafoudre",
				es: "Bólido Trueno",
				it: "Elettrobolide",
				pt: "Bastão de Trovão",
				de: "Donnerantrieb"
			},
			effect: {
				en: "Look at the top 4 cards of your deck and attach as many Lightning Energy cards you find there as you like to this Pokémon. Shuffle the other cards back into your deck.",
				fr: "Regardez les 4 cartes du dessus de votre deck et attachez autant de cartes Énergie Lightning que vous voulez et que vous y trouvez à ce Pokémon. Mélangez les autres cartes avec votre deck.",
				es: "Mira las 4 primeras cartas de tu baraja y une tantas cartas de Energía Lightning que encuentres entre ellas como quieras a este Pokémon. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Guarda le prime quattro carte del tuo mazzo e assegna a piacimento a questo Pokémon tutte le carte Energia Lightning che vuoi presenti tra quelle carte. Poi rimischia le altre carte nel tuo mazzo.",
				pt: "Veja os 4 cards de cima do seu baralho e ligue quaisquer cards de Energia Lightning que encontrar a este Pokémon, como quiser. Embaralhe os demais cards de volta.",
				de: "Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele Lightning-Energiekarten, die du darunter findest, an dieses Pokémon an. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sparkling Tail",
				fr: "Queue Étincelante",
				es: "Cola Centelleante",
				it: "Luminocoda",
				pt: "Cauda Cintilante",
				de: "Funkelnder Schweif"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos deste ataque não são afetados por Fraqueza, Resistência, ou qualquer outro efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 100,

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

	retreat: 2,
	stage: "Basic"
}

export default card
