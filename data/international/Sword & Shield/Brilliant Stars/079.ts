import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "GIDORA",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Roaring Resolve",
			'fr-fr': "Détermination Rugissante",
			'es-es': "Rugido Decisivo",
			'it-it': "Determinazione Ruggente",
			'pt-br': "Rugido Resoluto",
			'de-de': "Brüllender Entschluss"
		},

		effect: {
			'en-us': "Once during your turn, you may put 2 damage counters on this Pokémon. If you do, search your deck for a Fighting Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez dans votre deck une carte Énergie Fighting, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja 1 carta de Energía Fighting y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo una carta Energia Fighting e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano neste Pokémon. Se fizer isto, procure por 1 carta de Energia Fighting no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach 1 Fighting-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Aura Sphere Volley",
			'fr-fr': "Volée Aurasphère",
			'es-es': "Volea Esfera Aural",
			'it-it': "Forzasfera al Volo",
			'pt-br': "Salva de Auras Esféricas",
			'de-de': "Aurasphäre-Volley"
		},

		effect: {
			'en-us': "Discard all Fighting Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			'fr-fr': "Défaussez toute l'Énergie Fighting de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta todas las Energías Fighting de este Pokémon. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie Fighting da questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte todas as Energias Fighting deste Pokémon. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Lege alle Fighting-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608529,
				tcgplayer: 263795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608529,
				tcgplayer: 263795
			}
		},
	],
}

export default card
