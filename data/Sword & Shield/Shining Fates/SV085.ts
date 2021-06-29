import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath",
		en: "Grimmsnarl",
		es: "Grimmsnarl",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		de: "Olangaar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Fourbelin",
		en: "Morgrem"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Serment Obscur",
			en: "Dark Oath",
			es: "Juramento Siniestro",
			it: "Giuramento Oscuro",
			pt: "Juramento Sinistro",
			de: "Finsterer Schwur"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus.",
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s attacks cost Colorless more.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival cuestan Colorless más.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi del Pokémon attivo del tuo avversario aumenta di Colorless.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques do Pokémon Ativo do seu oponente custam Colorless a mais.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der Attacken des Aktiven Pokémon deines Gegners um Colorless."
		}
	}],

	attacks: [{
		name: {
			fr: "Pression Énergétique",
			en: "Energy Press",
			es: "Presión Energética",
			it: "Energipressa",
			pt: "Aperto de Energia",
			de: "Energiedruck"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card