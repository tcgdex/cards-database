import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'es-mx': "Ludicolo",
		'de-de': "Kappalores",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo"
	},

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'es-mx': "Lombre",
		'de-de': "Lombrero",
		'it-it': "Lombre",
		'pt-br': "Lombre",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [272],
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Excited Heal",
			'fr-fr': "Soin Dynamique",
			'es-es': "Impulso Curativo",
			'es-mx': "Curación Vibrante",
			'de-de': "Begeisterte Heilung",
			'it-it': "Fervorcura",
			'pt-br': "Cura Animada"
		},

		effect: {
			'en-us': "Once during your turn, if you have any {G} Mega Evolution Pokémon ex in play, you may use this Ability. Heal 60 damage from 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si vous avez au moins un Pokémon-ex Méga-Évolution {G} en jeu, vous pouvez utiliser ce talent. Soignez 60 dégâts de l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, si tienes algún Pokémon ex Megaevolución {G} en juego, puedes usar esta habilidad. Cura 60 puntos de daño a uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, si tienes algún Pokémon ex Megaevolución {G} en juego, puedes usar esta Habilidad. Cura 60 puntos de daño a 1 de tus Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn du mindestens 1 {G}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Heile 60 Schadenspunkte bei 1 deiner Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se hai dei Pokémon-ex Megaevoluzione {G} in gioco, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 60 danni.",
			'pt-br': "Uma vez durante o seu turno, se você tiver algum Pokémon ex de Megaevolução {G} em jogo, você poderá usar esta Habilidade. Cure 60 pontos de dano de 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'es-mx': "Embestida Brusca",
			'de-de': "Sprungangriff",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "There are structures throughout its whole body that produce energy when hit by sound waves with a cheerful rhythm.",
	},

	illustrator: "Anesaki Dynamic",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857582,
				tcgplayer: 662179,
				cardtrader: 356791
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857582,
				tcgplayer: 662179,
				cardtrader: 356791
			}
		},
	],
}

export default card
