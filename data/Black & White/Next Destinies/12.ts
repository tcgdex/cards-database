import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blazing Mane",
				fr: "Crinière Brûlante",
				es: "Crin Abrasadora",
				it: "Crinierovente",
				pt: "Juba Flamejante",
				de: "Lodernde Mähne"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out),the Attacking Pokémon is now Burned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene bruciato.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se este Pokémon for Nocauteado), o Pokémon Atacante ficará Queimado.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280237
	}
}

export default card
