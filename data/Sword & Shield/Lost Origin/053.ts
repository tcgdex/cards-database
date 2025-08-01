import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Trovoada de Choques",
			de: "Donnerschock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Ace Spark",
			fr: "Étincelle Excellente",
			es: "As de Chispas",
			it: "Assoscintilla",
			pt: "Faísca Ás",
			de: "Funkenass"
		},

		effect: {
			en: "If you have used your VSTAR Power, this attack does 120 more damage.",
			fr: "Si vous avez utilisé votre Puissance VSTAR, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si has usado tu Poder V-ASTRO, este ataque hace 120 puntos de daño más.",
			it: "Se hai già usato il tuo Potere V ASTRO, questo attacco infligge 120 danni in più.",
			pt: "Se você usou seu Poder V-ASTRO, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn du deine VSTAR-Power eingesetzt hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674063
	}
}

export default card