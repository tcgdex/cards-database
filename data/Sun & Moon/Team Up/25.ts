import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
		es: "Blastoise",
		it: "Blastoise",
		pt: "Blastoise",
		de: "Turtok"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Powerful Squall",
				fr: "Rafale Massive",
				es: "Ráfaga Poderosa",
				it: "Burrasca Portentosa",
				pt: "Tormenta Poderosa",
				de: "Mächtiger Schwall"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 6 cards of your deck and attach any number of Water Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 6 cartes du dessus de votre deck et attacher autant de cartes Énergie Water que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mirar las 6 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Water que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime sei carte del tuo mazzo e assegnare a piacimento un numero qualsiasi di carte Energia Water presenti tra esse ai tuoi Pokémon. Poi rimischia le altre carte nel tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode olhar as 6 primeiras cartas do seu baralho e ligar qualquer número de cartas de Energia Water que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dir die obersten 6 Karten deines Decks anschauen und beliebig viele Water-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Tackle",
				fr: "Hydro-Charge",
				es: "Hidroplacaje",
				it: "Idroazione",
				pt: "Investida de Água",
				de: "Hydrotackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 368957
	}
}

export default card
