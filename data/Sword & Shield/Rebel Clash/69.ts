import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Poison Shout",
				fr: "Cri Toxique",
				es: "Grito Venenoso",
				it: "Urlo Velenoso",
				pt: "Grito Venenoso",
				de: "Giftschrei"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
