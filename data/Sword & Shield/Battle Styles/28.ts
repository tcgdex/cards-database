import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox"
	},

	attacks: [{
		name: {
			en: "Perplex",
			fr: "Affolement",
			es: "Desconcierto",
			it: "Sconcerto",
			pt: "Perplexo",
			de: "Perplex"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Derisive Roasting",
			fr: "Raillerie Roussie",
			es: "Escarnio Abrasador",
			it: "Scherno Rovente",
			pt: "Calcinação Sarcástica",
			de: "Höhnisches Rösten"
		},

		effect: {
			en: "This attack does 90 damage for each Special Condition affecting your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 90 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 90 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 90 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 90 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 90 Schadenspunkte zu."
		},

		damage: "90×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card