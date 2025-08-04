import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
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
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fainting Spell",
				fr: "Sort d'Évanouissement",
				es: "Hechizo Desmayo",
				it: "Esaustoformula",
				pt: "Feitiço do Abatimento",
				de: "Ohnmachtsanfall"
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
				it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco del tuo avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
				pt: "Se este Pokémon for Nocauteado por danos de um ataque do oponente, jogue uma moeda. Se sair cara, o Pokémon Atacante será Nocauteado.",
				de: "Wenn dieses Pokémon durch Schaden eines gegnerischen Angriffs kampfunfähig wird, wirf 1 Münze. Bei \"Kopf\" wird das Angreifende Pokémon kampfunfähig."
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
				en: "Cursed Drop",
				fr: "Chute Maudite",
				es: "Caída Maldita",
				it: "Caduta Maledetta",
				pt: "Queda Amaldiçoada",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 6 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 6 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 6 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento sei segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 6 contadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				de: "Verteile 6 Schadensmarken beliebig auf die Pokémon deines Gegners."
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

	thirdParty: {
		cardmarket: 281849,
		tcgplayer: 94501
	}
}

export default card
