import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
		es: "Sandslash de Alola",
		it: "Sandslash di Alola",
		pt: "Sandslash de Alola",
		de: "Alola-Sandamer"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	stage: "Stage1",

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
			es: "Ataque Tambaleante",
			it: "Attacco Capriola",
			pt: "Ataque Cambalhota",
			de: "Taumler"
		},

		damage: "80+",

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		cost: ["Metal", "Metal", "Colorless"]
	}]
}

export default card
