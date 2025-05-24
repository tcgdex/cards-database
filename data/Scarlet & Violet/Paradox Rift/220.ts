import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena ex",
		fr: "Sucreine-ex",
		es: "Tsareena ex",
		it: "Tsareena-ex",
		pt: "Tsareena ex",
		de: "Fruyal-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Icicle Sole",
			fr: "Semelle Stalactite",
			es: "Suela Témpano",
			it: "Gelopianta",
			pt: "Sola Gélida",
			de: "Eiszapfensohle"
		},

		effect: {
			en: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 30.",
			fr: "Placez des marqueurs de dégâts sur l'un des Pokémon de votre adversaire jusqu'à ce qu'il ne lui reste que 30 PV.",
			es: "Pon contadores de daño en uno de los Pokémon de tu rival hasta que le queden 30 PS.",
			it: "Metti dei segnalini danno su uno dei Pokémon del tuo avversario finché i suoi PS rimanenti diventano 30.",
			pt: "Coloque contadores de dano em 1 dos Pokémon do seu oponente até o PS restante dele ser 30.",
			de: "Lege so lange Schadensmarken auf 1 Pokémon deines Gegners, bis seine verbleibenden KP gleich 30 sind."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Trop Kick",
			fr: "Botte Sucrette",
			es: "Patada Tropical",
			it: "Tropicalcio",
			pt: "Chute Tropical",
			de: "Tropenkick"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions.",
			fr: "Soignez 30 dégâts de ce Pokémon, et il guérit de tous les États Spéciaux.",
			es: "Cura 30 puntos de daño a este Pokémon, y este se recupera de todas las Condiciones Especiales.",
			it: "Cura questo Pokémon da 30 danni. Questo Pokémon guarisce da tutte le condizioni speciali.",
			pt: "Cure 30 pontos de dano deste Pokémon e ele se recupera de todas as Condições Especiais.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon, und es erholt sich von allen Speziellen Zuständen."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card