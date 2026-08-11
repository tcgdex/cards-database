import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [943],
	set: Set,

	name: {
		'en-us': "Arven's Mabosstiff ex",
		'fr-fr': "Dogrino-ex de Pepper",
		'de-de': "Peppers Mastifioso-ex",
		'it-it': "Mabosstiff-ex di Pepe",
		'es-es': "Mabosstiff ex de Damián",
		'pt-br': "Mabosstiff ex do Arven",
		'es-mx': "Mabosstiff ex de Damián"
	},


	suffix: "ex",
	illustrator: "akagi",

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Arven's Maschiff",
		'fr-fr': "Grondogue de Pepper",
		'de-de': "Peppers Mobtiff",
		'it-it': "Maschiff di Pepe",
		'es-es': "Maschiff de Damián",
		'pt-br': "Maschiff do Arven",
		'es-mx': "Maschiff de Damián"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Vigorous Tackle",
			'fr-fr': "Charge Vigoureuse",
			'de-de': "Energischer Tackle",
			'it-it': "Azione Vigorosa",
			'es-es': "Placaje Rotundo",
			'pt-br': "Investida Vigorosa",
			'es-mx': "Tacleada Vigorosa"
		},

		effect: {
			'en-us': "If this Pokémon has no damage counters on it, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon non ha segnalini danno, questo attacco infligge 120 danni in più.",
			'es-es': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 120 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Boss Headbutt",
			'fr-fr': "Coup d'Boule du Boss",
			'de-de': "Kopfnuss vom Boss",
			'it-it': "Bottintesta del Boss",
			'es-es': "Cabezazo del Jefazo",
			'pt-br': "Cabeçada do Chefão",
			'es-mx': "Cabezazo del Jefe"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Boss Headbutt.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d'Boule du Boss.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Kopfnuss vom Boss nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Bottintesta del Boss.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Cabezazo del Jefazo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Cabeçada do Chefão.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cabezazo del Jefe."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826013,
				tcgplayer: 632946
			}
		},
	],
}

export default card
