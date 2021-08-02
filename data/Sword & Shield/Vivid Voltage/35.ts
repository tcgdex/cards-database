import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Samurott",
		fr: "Clamiral",
		es: "Samurott",
		it: "Samurott",
		pt: "Samurott",
		de: "Admurai"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Armor",
				fr: "Coque Armure",
				es: "Hojas Envolventes",
				it: "Fogliefascia",
				pt: "Enfaixar com Folhas",
				de: "Blätterwickel"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wash",
				fr: "Aqua-Lavage",
				es: "Limpieza Acuática",
				it: "Idrolavaggio",
				pt: "Limpeza Aquática",
				de: "Aquawäsche"
			},
			effect: {
				en: "You may put 2 Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
				es: "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
				it: "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
				pt: "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele(a).",
				de: "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
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

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
