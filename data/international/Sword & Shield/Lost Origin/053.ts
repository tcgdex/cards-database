import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "GIDORA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Ace Spark",
			'fr-fr': "Étincelle Excellente",
			'es-es': "As de Chispas",
			'it-it': "Assoscintilla",
			'pt-br': "Faísca Ás",
			'de-de': "Funkenass"
		},

		effect: {
			'en-us': "If you have used your VSTAR Power, this attack does 120 more damage.",
			'fr-fr': "Si vous avez utilisé votre Puissance VSTAR, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si has usado tu Poder V-ASTRO, este ataque hace 120 puntos de daño más.",
			'it-it': "Se hai già usato il tuo Potere V ASTRO, questo attacco infligge 120 danni in più.",
			'pt-br': "Se você usou seu Poder V-ASTRO, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn du deine VSTAR-Power eingesetzt hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674063,
				tcgplayer: 283927
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674063,
				tcgplayer: 283927
			}
		},
	],
}

export default card
