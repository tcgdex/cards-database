import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Grimmsnarl",
		fr: "Angoliath",
		es: "Grimmsnarl",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		de: "Olangaar"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Morgrem",
		fr: "Fourbelin"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Oath",
				fr: "Serment Obscur",
				es: "Juramento Siniestro",
				it: "Giuramento Oscuro",
				pt: "Juramento Sinistro",
				de: "Finsterer Schwur"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus.",
				es: "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival cuestan Colorless más.",
				it: "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi del Pokémon attivo del tuo avversario aumenta di Colorless.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques do Pokémon Ativo do seu oponente custam Colorless a mais.",
				de: "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der Attacken des Aktiven Pokémon deines Gegners um Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique",
				es: "Presión Energética",
				it: "Energipressa",
				pt: "Aperto de Energia",
				de: "Energiedruck"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
