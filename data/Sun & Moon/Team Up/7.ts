import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		it: "Parasect",
		pt: "Parasect",
		de: "Parasek"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Panic Spores",
				fr: "Spores en Panique",
				es: "Esporas de Pánico",
				it: "Spore Incontrollabili",
				pt: "Esporos de Pânico",
				de: "Paniksporen"
			},
			effect: {
				en: "Put 2 damage counters on your opponent’s Confused Pokémon between turns.",
				fr: "Placez 2 marqueurs de dégâts sur le Pokémon Confus de votre adversaire entre chaque tour.",
				es: "Pon 2 contadores de daño en el Pokémon Confundido de tu rival entre turnos.",
				it: "Metti due segnalini danno sul Pokémon confuso del tuo avversario tra un turno e l’altro.",
				pt: "Coloque 2 contadores de dano no Pokémon Confuso do seu oponente entre as vezes de jogar.",
				de: "Lege zwischen den Zügen 2 Schadensmarken auf die verwirrten Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mysterious Powder",
				fr: "Poudre Mystérieuse",
				es: "Polvo Misterioso",
				it: "Polvere Misteriosa",
				pt: "Pó Misterioso",
				de: "Mysteriöser Puder"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
