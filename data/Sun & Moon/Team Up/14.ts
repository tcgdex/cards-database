import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roaring Resolve",
				fr: "Détermination Rugissante",
				es: "Rugido Decisivo",
				it: "Determinazione Ruggente",
				pt: "Rugido Resoluto",
				de: "Brüllender Entschluss"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 damage counters on this Pokémon. If you do, search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 2 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja hasta 2 cartas de Energía Fire y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere due segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo fino a due carte Energia Fire e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 2 contadores de dano neste Pokémon. Se fizer isto, procure por até 2 cartas de Energia Fire no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach bis zu 2 Fire-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Continuous Blaze Ball",
				fr: "Balle Incendiaire Continue",
				es: "Bola Ascuas Incesante",
				it: "Pallafuoco Infinita",
				pt: "Bola de Fogo Contínua",
				de: "Dauerbrandball"
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Descarta todas las Energías Fire de este Pokémon. Este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon. Questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Fire deste Pokémon. Este ataque causa 50 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 368294,
		tcgplayer: 183785
	}
}

export default card
