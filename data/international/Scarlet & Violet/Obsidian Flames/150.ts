import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [983],
	set: Set,

	name: {
		'fr-fr': "Scalpereur",
		'en-us': "Kingambit",
		'es-es': "Kingambit",
		'it-it': "Kingambit",
		'pt-br': "Kingambit",
		'de-de': "Gladimperio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Scalproie",
		'en-us': "Bisharp",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Au Tapis",
			'en-us': "Strike Down",
			'es-es': "Derrotar",
			'it-it': "Atterramento",
			'pt-br': "Derrocada",
			'de-de': "Niederstrecken"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire a au moins 4 marqueurs de dégâts, il est mis K.O.",
			'en-us': "If your opponent's Active Pokémon has 4 or more damage counters on it, that Pokémon is Knocked Out.",
			'es-es': "Si el Pokémon Activo de tu rival tiene 4 contadores de daño o más sobre él, ese Pokémon queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha quattro o più segnalini danno, quel Pokémon viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver 4 ou mais contadores de dano nele, aquele Pokémon será Nocauteado.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Déchirure Massive",
			'en-us': "Massive Rend",
			'es-es': "Corte Masivo",
			'it-it': "Supersquarcio",
			'pt-br': "Laceração Massiva",
			'de-de': "Riesiger Riss"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725230,
				tcgplayer: 509937,
				cardtrader: 255835
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725230,
				tcgplayer: 509937,
				cardtrader: 255835
			}
		},
	],

	illustrator: "Ryota Murayama",

	
}

export default card
