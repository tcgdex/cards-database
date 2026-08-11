import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Guts",
				'fr-fr': "Cran",
				'es-es': "Agallas",
				'it-it': "Dentistretti",
				'pt-br': "Tenacidade",
				'de-de': "Adrenalin"
			},
			effect: {
				'en-us': "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
				'fr-fr': "Si les dégâts d’une attaque peuvent mettre ce Pokémon K.O., lancez une pièce. Si c’est face, ce Pokémon n’est pas mis K.O., mais il n’a plus que 10 PV.",
				'es-es': "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
				'it-it': "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
				'pt-br': "Jogue 1 moeda se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
				'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Pitch",
				'fr-fr': "Lancer",
				'es-es': "Arrojar",
				'it-it': "Spingivia",
				'pt-br': "Lançamento",
				'de-de': "Einwerfen"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This powerful Pokémon thrusts its prized horn under its enemies' bellies, then lifts and throws them.",
	},

	thirdParty: {
		cardmarket: 299418,
		tcgplayer: 138281
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
