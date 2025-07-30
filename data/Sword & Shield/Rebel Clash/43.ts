import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Milotic V",
		fr: "Milobellus V",
		es: "Milotic V",
		it: "Milotic V",
		pt: "Milotic V",
		de: "Milotic V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Impact",
				fr: "Impact Aqua",
				es: "Impacto Aqua",
				it: "Acquimpatto",
				pt: "Impacto Aqua",
				de: "Aqua-Einschlag"
			},
			effect: {
				en: "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 50 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 50 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
				fr: "Hypnoplouf",
				es: "Salpicadura Hipnótica",
				it: "Ipnospruzzo",
				pt: "Explosão Hipnótica",
				de: "Hypnospritzer"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 457658
	}
}

export default card
