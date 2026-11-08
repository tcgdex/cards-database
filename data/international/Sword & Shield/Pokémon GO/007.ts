import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Poison String-Up",
			'fr-fr': "Poison Ligotant",
			'es-es': "Tela Venenosa",
			'it-it': "Groviglio Velenoso",
			'pt-br': "Amarração Venenosa",
			'de-de': "Giftige Verwicklung"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Envenenado e Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'es-es': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção",
			'de-de': "Absorber"
		},

		effect: {
			'en-us': "Heal 50 damage from this Pokémon.",
			'fr-fr': "Soignez 50 dégâts de ce Pokémon.",
			'es-es': "Cura 50 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 50 danni.",
			'pt-br': "Cure 50 pontos de dano deste Pokémon.",
			'de-de': "Heile 50 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665656,
				tcgplayer: 276945
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665656,
				tcgplayer: 276945
			}
		},
	],
}

export default card
