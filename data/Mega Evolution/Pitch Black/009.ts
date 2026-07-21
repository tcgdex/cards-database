import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		'es-mx': "Sizzlipede",
		de: "Thermopod",
		it: "Sizzlipede",
		pt: "Sizzlipede"
	},

	illustrator: "Yuya Oka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [850],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Controlled Burn",
			fr: "Feu Contrôlé",
			es: "Fuego Controlado",
			'es-mx': "Quema Controlada",
			de: "Brandrodung",
			it: "Incendio Preventivo",
			pt: "Fogo Controlado"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Descarta la primera carta del mazo de tu rival.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente."
		}
	}, {
		name: {
			en: "Bug Out",
			fr: "Horde d'Insectes",
			es: "Bichos al Acecho",
			'es-mx': "Insectofobia",
			de: "Käferkomplott",
			it: "Coleopanico",
			pt: "Insetofobia"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: "50×",

		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Montrez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez ayant l'attaque Horde d'Insectes. Mélangez ensuite les Pokémon montrés avec votre deck. Défaussez les autres cartes.",
			es: "Enseña las 7 últimas cartas de tu baraja, y este ataque hace 50 puntos de daño por cada Pokémon que encuentres entre ellas que tenga el ataque Bichos al Acecho. Después, pon cualquier Pokémon que hayas enseñado de nuevo en tu baraja y baraja todas las cartas. Descarta el resto de las cartas.",
			'es-mx': "Muestra las últimas 7 cartas de tu mazo, y este ataque hace 50 puntos de daño por cada Pokémon que encuentres entre ellas que tenga el ataque Insectofobia. Después, baraja todos los Pokémon que mostraste de nuevo en tu mazo. Descarta el resto de las cartas.",
			de: "Zeige deinem Gegner die untersten 7 Karten deines Decks, und diese Attacke fügt für jedes Pokémon, das du dort findest und das die Attacke Käferkomplott hat, 50 Schadenspunkte zu. Mische anschließend alle gezeigten Pokémon zurück in dein Deck. Lege die anderen Karten auf deinen Ablagestapel.",
			it: "Mostra le ultime sette carte del tuo mazzo e questo attacco infligge 50 danni per ogni Pokémon presente tra esse che ha l'attacco Coleopanico. Poi rimischia i Pokémon che hai mostrato nel tuo mazzo. Scarta le altre carte.",
			pt: "Revele as 7 cartas de baixo do seu baralho, e este ataque causa 50 pontos de dano para cada Pokémon que você encontrar lá que tem o ataque Insetofobia. Em seguida, embaralhe quaisquer Pokémon revelados de volta no seu baralho. Descarte as outras cartas."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895797,
				tcgplayer: 704766
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895797,
				tcgplayer: 704766
			}
		},
	],
}

export default card
