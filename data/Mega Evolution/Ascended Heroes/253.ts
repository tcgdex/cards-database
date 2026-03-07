import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [531],

	name: {
		en: "Mega Audino ex",
		fr: "Méga-Nanméouïe-ex",
		es: "Mega-Audino ex",
		'es-mx': "Mega-Audino ex",
		de: "Mega-Ohrdoch-ex",
		it: "Mega Audino-ex",
		pt: "Mega Audino ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Kaleidowaltz",
			fr: "Kaléidovalse",
			es: "Caleidovals",
			'es-mx': "Caleidovals",
			de: "Kaleidowalzer",
			it: "Caleidovalzer",
			pt: "Caleidovalsa"
		},

		effect: {
			en: "Flip 3 coins. For each heads, search your deck for up to 2 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lancez 3 pièces. Pour chaque côté face, cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Lanza 3 monedas. Por cada cara, busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Lanza 3 monedas. Por cada cara, busca en tu mazo hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que quieras. Después, baraja tu mazo.",
			de: "Wirf 3 Münzen. Durchsuche pro Kopf dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			it: "Lancia tre volte una moneta. Ogni volta che esce testa, cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia il tuo mazzo.",
			pt: "Jogue 3 moedas. Para cada cara, procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Ear Force",
			fr: "Force Auditive",
			es: "Fuerza Auditiva",
			'es-mx': "Fuerza Auditiva",
			de: "Ohrenmacht",
			it: "Forza Auditiva",
			pt: "Força Auditiva"
		},

		effect: {
			en: "This attack does 80 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 80 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 80 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 80 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 80 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 80 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 80 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 676065,
		cardmarket: 869864
	}
}

export default card
