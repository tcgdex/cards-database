import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	abilities: [{
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
			en: "Once during your turn, you may put 2 damage counters on this Pokémon. If you do, search your deck for a Fighting Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez dans votre deck une carte Énergie Fighting, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja 1 carta de Energía Fighting y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo una carta Energia Fighting e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano neste Pokémon. Se fizer isto, procure por 1 carta de Energia Fighting no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach 1 Fighting-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Aura Sphere Volley",
			fr: "Volée Aurasphère",
			es: "Volea Esfera Aural",
			it: "Forzasfera al Volo",
			pt: "Salva de Auras Esféricas",
			de: "Aurasphäre-Volley"
		},

		effect: {
			en: "Discard all Fighting Energy from this Pokémon. This attack does 60 more damage for each card you discarded in this way.",
			fr: "Défaussez toute l'Énergie Fighting de ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Descarta todas las Energías Fighting de este Pokémon. Este ataque hace 60 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Scarta tutte le Energie Fighting da questo Pokémon. Questo attacco infligge 60 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Descarte todas as Energias Fighting deste Pokémon. Este ataque causa 60 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Lege alle Fighting-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
