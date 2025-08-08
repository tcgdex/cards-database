import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		fr: "Lucario",
		de: "Lucario",
		es: "Lucario",
		pt: "Lucario",
		it: "Lucario",
		en: "Lucario"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Riolu",
		de: "Riolu",
		es: "Riolu",
		pt: "Riolu",
		it: "Riolu",
		en: "Riolu"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Détermination Rugissante",
			de: "Brüllender Entschluss",
			es: "Rugido Decisivo",
			pt: "Rugido Resoluto",
			it: "Determinazione Ruggente",
			en: "Roaring Resolve"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez dans votre deck une carte Énergie {F}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach 1 {F}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja 1 carta de Energía {F} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano neste Pokémon. Se fizer isto, procure por 1 carta de Energia {F} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo una carta Energia {F} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			en: "Once during your turn, you may put 2 damage counters on this Pokémon. If you do, search your deck for a {F} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Volée Aurasphère",
			de: "Aurasphäre-Volley",
			es: "Volea Esfera Aural",
			pt: "Salva de Auras Esféricas",
			it: "Forzasfera al Volo",
			en: "Aura Sphere Volley"
		},

		effect: {
			fr: "Défaussez toute l'Énergie {F} de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Lege alle {F}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu.",
			es: "Descarta todas las Energías {F} de este Pokémon. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Descarte todas as Energias {F} deste Pokémon. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
			it: "Scarta tutte le Energie {F} da questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			en: "Discard all {F} Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey."
	}
}

export default card