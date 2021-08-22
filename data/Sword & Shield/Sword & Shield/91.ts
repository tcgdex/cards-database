import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Indeedee V",
		fr: "Wimessir V",
		es: "Indeedee V",
		it: "Indeedee V",
		pt: "Indeedee V",
		de: "Servol V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Psychic",
	],

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Watch Over",
				fr: "Veille",
				es: "Cuidados",
				it: "Cura Protettiva",
				pt: "Cuidar",
				de: "Obhut"
			},
			effect: {
				en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
				es: "Una vez durante tu turno, puedes curar 20 puntos de daño a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, puoi curare il tuo Pokémon attivo da 20 danni.",
				pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano do seu Pokémon Ativo.",
				de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei deinem Aktiven Pokémon heilen."
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
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 60 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 60 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 60 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic"
}

export default card
