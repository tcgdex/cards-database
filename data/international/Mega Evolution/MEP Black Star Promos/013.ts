import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Venusaur ex",
		'fr-fr': "Méga-Florizarre-ex",
		'de-de': "Mega-Bisaflor-ex",
		'it-it': "Mega Venusaur-ex",
		'es-es': "Mega Venusaur ex",
		'pt-br': "Mega Venusaur ex",
		'es-mx': "Mega Venusaur ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 380,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [3],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'de-de': "Bisaknosp",
		'it-it': "Ivysaur",
		'es-es': "Ivysaur",
		'pt-br': "Ivysaur",
		'es-mx': "Ivysaur"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solar Transfer",
			'fr-fr': "Transfert Solaire",
			'de-de': "Solartransfer",
			'it-it': "Transfer Solare",
			'es-es': "Traspaso Solar",
			'pt-br': "Transferência Solar",
			'es-mx': "Transferencia Solar"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may use this Ability. Move a Basic {G} Energy from 1 of your Pokémon to another of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie {G} de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 Basis-{G}-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon.",
			'it-it': "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia base {G} da uno dei tuoi Pokémon a un altro dei tuoi Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía {G} Básica de uno de tus Pokémon a otro de tus Pokémon.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia {G} Básica de 1 dos seus Pokémon para outro Pokémon seu.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes usar esta Habilidad. Mueve 1 Energía {G} Básica de 1 de tus Pokémon a otro de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass", "Grass"],

		name: {
			'en-us': "Jungle Dump",
			'fr-fr': "Rejet de Jungle",
			'de-de': "Dschungelhalde",
			'it-it': "Impatto della Giungla",
			'es-es': "Descarga Selvática",
			'pt-br': "Selva Entulhada",
			'es-mx': "Descarga Selvática"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 240
	}],

	retreat: 4,
	regulationMark: "I",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 859011,
				tcgplayer: 666905
			}
		},
		{
			type: 'lenticular',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 859012,
				tcgplayer: 668464
			}
		},
	],
}

export default card
