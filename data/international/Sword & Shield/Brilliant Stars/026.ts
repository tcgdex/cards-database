import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [392],
	set: Set,

	name: {
		'en-us': "Infernape",
		'fr-fr': "Simiabraz",
		'es-es': "Infernape",
		'it-it': "Infernape",
		'pt-br': "Infernape",
		'de-de': "Panferno"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Infernal Vortex",
			'fr-fr': "Vortex Infernal",
			'es-es': "Vórtice Infernal",
			'it-it': "Vortice Infernale",
			'pt-br': "Vórtice Infernal",
			'de-de': "Infernalischer Wirbel"
		},

		effect: {
			'en-us': "Reveal the top 5 cards of your deck. This attack does 80 damage for each Energy card you find there. Then, discard those Energy cards and shuffle the other cards back into your deck.",
			'fr-fr': "Montrez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie que vous y trouvez. Défaussez ensuite ces cartes Énergie et mélangez les autres cartes avec votre deck.",
			'es-es': "Enseña las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que encuentres entre ellas. Después, descarta esas cartas de Energía, pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Mostra le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia presente tra quelle carte. Poi scarta quelle carte Energia e rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Revele as 5 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia que encontrar lá. Em seguida, descarte aquelas cartas de Energia e embaralhe as demais cartas de volta no seu baralho.",
			'de-de': "Zeige deinem Gegner die obersten 5 Karten deines Decks. Diese Attacke fügt für jede Energiekarte, die du dort findest, 80 Schadenspunkte zu. Lege anschließend jene Energiekarten auf deinen Ablagestapel und mische die anderen Karten zurück in dein Deck."
		},

		damage: "80×"
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Burning Kick",
			'fr-fr': "Coup de Pied Brûlant",
			'es-es': "Patada Ardiente",
			'it-it': "Calcio Fiammeggiante",
			'pt-br': "Petardo",
			'de-de': "Brennender Schuss"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608476,
				tcgplayer: 263725
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608476,
				tcgplayer: 263725
			}
		},
	],
}

export default card
