import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'fr-fr': "Lucario",
		'de-de': "Lucario",
		'es-es': "Lucario",
		'pt-br': "Lucario",
		'it-it': "Lucario",
		'en-us': "Lucario"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Riolu",
		'de-de': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'it-it': "Riolu",
		'en-us': "Riolu"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Détermination Rugissante",
			'de-de': "Brüllender Entschluss",
			'es-es': "Rugido Decisivo",
			'pt-br': "Rugido Resoluto",
			'it-it': "Determinazione Ruggente",
			'en-us': "Roaring Resolve"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez dans votre deck une carte Énergie {F}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach 1 {F}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja 1 carta de Energía {F} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano neste Pokémon. Se fizer isto, procure por 1 carta de Energia {F} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo una carta Energia {F} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Once during your turn, you may put 2 damage counters on this Pokémon. If you do, search your deck for a {F} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Volée Aurasphère",
			'de-de': "Aurasphäre-Volley",
			'es-es': "Volea Esfera Aural",
			'pt-br': "Salva de Auras Esféricas",
			'it-it': "Forzasfera al Volo",
			'en-us': "Aura Sphere Volley"
		},

		effect: {
			'fr-fr': "Défaussez toute l'Énergie {F} de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'de-de': "Lege alle {F}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu.",
			'es-es': "Descarta todas las Energías {F} de este Pokémon. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte todas as Energias {F} deste Pokémon. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
			'it-it': "Scarta tutte le Energie {F} da questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			'en-us': "Discard all {F} Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way."
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
		'en-us': "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey."
	},

	thirdParty: {
		cardmarket: 606600
	}
}

export default card
