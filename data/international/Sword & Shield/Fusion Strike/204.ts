import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "You shouldn't get close to the child when it's playing outside its mother's pouch. Its mother is always nearby watching over it."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'de-de': "Klaps",
			'es-es': "Destructor",
			'pt-br': "Pancada",
			'it-it': "Botta"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Coordinated One-Two Punch",
			'fr-fr': "En Deux Punch Coordonnés",
			'de-de': "Koordinierter Doppelschubser",
			'es-es': "Puñetazo Uno-Dos Coordinado",
			'pt-br': "Soco em Dois Tempos Coordenado",
			'it-it': "Pugni Rapidi Coordinati"
		},

		damage: "60+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 100 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582880,
				tcgplayer: 253298
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582880,
				tcgplayer: 253298
			}
		},
	],
}

export default card
