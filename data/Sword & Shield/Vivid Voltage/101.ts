import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Full Nelson",
				fr: "Double Nelson",
				es: "Nelson Completa",
				it: "Doppia Nelson",
				pt: "Chave Imobilizadora",
				de: "Doppelnelson"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tentacle Buster",
				fr: "Buster Tentaculaire",
				es: "Tentáculo Destructor",
				it: "Tentacolo Distruttivo",
				pt: "Tentáculo Destruidor",
				de: "Tentakelknacker"
			},
			effect: {
				en: "If this Pokémon used Full Nelson during your last turn, this attack does 120 more damage.",
				fr: "Si ce Pokémon a utilisé Double Nelson pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si este Pokémon usó Nelson Completa durante tu último turno, este ataque hace 120 puntos de daño más.",
				it: "Se questo Pokémon ha usato Doppia Nelson durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
				pt: "Se este Pokémon usou Chave Imobilizadora durante o seu último turno, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während deines letzten Zuges Doppelnelson eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
