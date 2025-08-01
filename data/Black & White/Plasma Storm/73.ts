import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
	},

	illustrator: "Kouji Tajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Premonition",
				fr: "Présage",
				es: "Presentimiento",
				it: "Presentimento",
				pt: "Premonição",
				de: "Vorhersage"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back on top of your deck in any order.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l’ordre de votre choix.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja y volver a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo e rimetterle in cima al mazzo nell’ordine che preferisci.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá ver os 2 cards de cima do seu baralho e colocá-los de volta no topo do baralho em qualquer ordem.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Decks anschauen und sie in beliebiger Reihenfolge zurück auf dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
			},

			damage: 30,

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
		cardmarket: 280813,
		tcgplayer: 86929
	}
}

export default card
