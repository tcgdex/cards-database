import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [663],

	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Feathers",
				fr: "Plumes Calcinantes",
				es: "Plumas Abrasadoras",
				it: "Piume Ustionanti",
				pt: "Penas Abrasadoras",
				de: "Versengende Federn"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même si ce Pokémon-ci est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
				es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Quemado.",
				it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO,il Pokémon attaccante viene bruciato.",
				pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante ficará Queimado.",
				de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt verbrannt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Flight",
				fr: "Vol Supersonique",
				es: "Vuelo Mach",
				it: "Volo Mach",
				pt: "Voo Supersônico",
				de: "Tempoflug"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick."
	},

	thirdParty: {
		cardmarket: 483034
	}
}

export default card
