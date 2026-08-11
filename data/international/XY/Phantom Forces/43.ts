import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fainting Spell",
				'fr-fr': "Sort d'Évanouissement",
				'es-es': "Hechizo Desmayo",
				'it-it': "Esaustoformula",
				'pt-br': "Feitiço do Abatimento",
				'de-de': "Ohnmachtsanfall"
			},
			effect: {
				'en-us': "If this Pokémon is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
				'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco del tuo avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
				'pt-br': "Se este Pokémon for Nocauteado por danos de um ataque do oponente, jogue uma moeda. Se sair cara, o Pokémon Atacante será Nocauteado.",
				'de-de': "Wenn dieses Pokémon durch Schaden eines gegnerischen Angriffs kampfunfähig wird, wirf 1 Münze. Bei \"Kopf\" wird das Angreifende Pokémon kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute Maudite",
				'es-es': "Caída Maldita",
				'it-it': "Caduta Maledetta",
				'pt-br': "Queda Amaldiçoada",
				'de-de': "Verfluchter Fall"
			},
			effect: {
				'en-us': "Put 6 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 6 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 6 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento sei segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 6 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Verteile 6 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind.",
	},

	thirdParty: {
		cardmarket: 281849,
		tcgplayer: 94501
	}
}

export default card
