import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Leech Life",
			'fr-fr': "Vampirisme",
			'es-es': "Chupavidas",
			'it-it': "Sanguisuga",
			'pt-br': "Suga-vidas",
			'de-de': "Blutsauger"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Turbulent Wings",
			'fr-fr': "Ailes Tumultueuses",
			'es-es': "Alas Turbulentas",
			'it-it': "Ali Turbolente",
			'pt-br': "Asas Turbulentas",
			'de-de': "Turbulente Flügel"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794280,
				tcgplayer: 590091
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794280,
				tcgplayer: 590091
			}
		},
	],

	illustrator: "matazo",
	
}

export default card
