import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott ex",
		fr: "Farfaduvet-ex",
		de: "Elfun-ex",
		it: "Whimsicott-ex",
		pt: "Whimsicott ex",
		es: "Whimsicott ex",
		'es-mx': "Whimsicott ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Energy Gift",
			fr: "Don d'Énergie",
			de: "Energiegabe",
			it: "Donergia",
			pt: "Presente de Energia",
			es: "Regalo de Energía",
			'es-mx': "Regalo de Energía"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que quieras. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Wondrous Cotton",
			fr: "Coton Merveilleux",
			de: "Wundersame Baumwolle",
			it: "Cotone Meraviglioso",
			pt: "Algodão Encantado",
			es: "Algodón Prodigioso",
			'es-mx': "Algodón Extraordinario"
		},

		effect: {
			en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
			fr: "Votre adversaire montre sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
			pt: "Seu oponente revela a mão dele. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'es-mx': "Tu rival muestra las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas."
		},

		damage: "50×"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card