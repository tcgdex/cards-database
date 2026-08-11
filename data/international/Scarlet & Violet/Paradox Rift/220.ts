import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		'en-us': "Tsareena ex",
		'fr-fr': "Sucreine-ex",
		'es-es': "Tsareena ex",
		'it-it': "Tsareena-ex",
		'pt-br': "Tsareena ex",
		'de-de': "Fruyal-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Icicle Sole",
			'fr-fr': "Semelle Stalactite",
			'es-es': "Suela Témpano",
			'it-it': "Gelopianta",
			'pt-br': "Sola Gélida",
			'de-de': "Eiszapfensohle"
		},

		effect: {
			'en-us': "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 30.",
			'fr-fr': "Placez des marqueurs de dégâts sur l'un des Pokémon de votre adversaire jusqu'à ce qu'il ne lui reste que 30 PV.",
			'es-es': "Pon contadores de daño en uno de los Pokémon de tu rival hasta que le queden 30 PS.",
			'it-it': "Metti dei segnalini danno su uno dei Pokémon del tuo avversario finché i suoi PS rimanenti diventano 30.",
			'pt-br': "Coloque contadores de dano em 1 dos Pokémon do seu oponente até o PS restante dele ser 30.",
			'de-de': "Lege so lange Schadensmarken auf 1 Pokémon deines Gegners, bis seine verbleibenden KP gleich 30 sind."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Trop Kick",
			'fr-fr': "Botte Sucrette",
			'es-es': "Patada Tropical",
			'it-it': "Tropicalcio",
			'pt-br': "Chute Tropical",
			'de-de': "Tropenkick"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon, et il guérit de tous les États Spéciaux.",
			'es-es': "Cura 30 puntos de daño a este Pokémon, y este se recupera de todas las Condiciones Especiales.",
			'it-it': "Cura questo Pokémon da 30 danni. Questo Pokémon guarisce da tutte le condizioni speciali.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon e ele se recupera de todas as Condições Especiais.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon, und es erholt sich von allen Speziellen Zuständen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740763,
				tcgplayer: 523901,
				cardtrader: 265376
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
