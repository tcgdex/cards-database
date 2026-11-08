import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [983],
	set: Set,

	name: {
		'en-us': "Kingambit",
		'fr-fr': "Scalpereur",
		'es-es': "Kingambit",
		'it-it': "Kingambit",
		'pt-br': "Kingambit",
		'de-de': "Gladimperio"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Strike Down",
			'fr-fr': "Au Tapis",
			'es-es': "Derrotar",
			'it-it': "Atterramento",
			'pt-br': "Derrocada",
			'de-de': "Niederstrecken"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has 4 or more damage counters on it, that Pokémon is Knocked Out.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a au moins 4 marqueurs de dégâts, il est mis K.O.",
			'es-es': "Si el Pokémon Activo de tu rival tiene 4 contadores de daño o más sobre él, ese Pokémon queda Fuera de Combate.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha quattro o più segnalini danno, quel Pokémon viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver 4 ou mais contadores de dano nele, aquele Pokémon será Nocauteado.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 4 Schadensmarken liegen, ist jenes Pokémon kampfunfähig."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Massive Rend",
			'fr-fr': "Déchirure Massive",
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
	illustrator: "Oku",
	description: {
		'en-us': "Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 770950,
				tcgplayer: 562087
			},
		}
	],
}

export default card
