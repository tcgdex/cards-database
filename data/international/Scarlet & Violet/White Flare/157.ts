import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		'en-us': "Whimsicott ex",
		'fr-fr': "Farfaduvet-ex",
		'de-de': "Elfun-ex",
		'it-it': "Whimsicott-ex",
		'pt-br': "Whimsicott ex",
		'es-es': "Whimsicott ex",
		'es-mx': "Whimsicott ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'de-de': "Waumboll",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'es-es': "Cottonee",
		'es-mx': "Cottonee"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Energy Gift",
			'fr-fr': "Don d'Énergie",
			'de-de': "Energiegabe",
			'it-it': "Donergia",
			'pt-br': "Presente de Energia",
			'es-es': "Regalo de Energía",
			'es-mx': "Regalo de Energía"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que quieras. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Wondrous Cotton",
			'fr-fr': "Coton Merveilleux",
			'de-de': "Wundersame Baumwolle",
			'it-it': "Cotone Meraviglioso",
			'pt-br': "Algodão Encantado",
			'es-es': "Algodón Prodigioso",
			'es-mx': "Algodón Extraordinario"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
			'fr-fr': "Votre adversaire montre sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
			'pt-br': "Seu oponente revela a mão dele. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'es-mx': "Tu rival muestra las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas."
		},

		damage: "50×"
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836195,
			tcgplayer: 642274
		}
	},
],
}

export default card
