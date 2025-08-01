import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		es: "Sharpedo",
		it: "Sharpedo",
		pt: "Sharpedo",
		de: "Tohaido"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Greedy Evolution",
				fr: "Évolution Cupide",
				es: "Evolución Codiciosa",
				it: "Evoluzione Famelica",
				pt: "Evolução Gananciosa",
				de: "Gierige Entwicklung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 6 cards of your deck and attach any number of Darkness Energy cards you find there to this Pokémon. Shuffle the other cards back into your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 6 cartes du dessus de votre deck, et attacher le nombre désiré de cartes Énergie Darkness trouvées à ce Pokémon. Mélangez les autres cartes avec votre deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Darkness que encuentres entre ellas a este Pokémon. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi guardare le prime sei carte del tuo mazzo e assegnare a piacimento un numero qualsiasi di carte Energia Darkness presenti tra esse a questo Pokémon. Rimischia le altre carte nel tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode olhar as 6 primeiras cartas do seu baralho e ligar qualquer número de cartas de Energia Darkness que encontrar lá a este Pokémon. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele Darkness-Energiekarten, die du dort findest, an dieses Pokémon anlegen. Mische die anderen Karten zurück in sein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bad Fangs",
				fr: "Mauvais Crocs",
				es: "Colmillos Perversos",
				it: "Fauci Perfide",
				pt: "Presas Maléficas",
				de: "Üble Zähne"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Darkness Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Darkness attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Darkness ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Darkness-Energien zu."
			},
			damage: "60+",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 372401
	}
}

export default card
