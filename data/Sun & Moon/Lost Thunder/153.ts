import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Happiness Supplement",
				fr: "Complément de Joie",
				es: "Suplemento de Felicidad",
				it: "Integratore di Felicità",
				pt: "Suplemento de Felicidade",
				de: "Freudige Beilage"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove a Special Condition from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un État Spécial de votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes eliminar 1 Condición Especial de tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi rimuovere una condizione speciale dal tuo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode remover 1 Condição Especial do seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Speziellen Zustand von deinem Aktiven Pokémon entfernen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Slap",
				fr: "Grosse Baffe",
				es: "Tremendo Bofetón",
				it: "Schiaffettone",
				pt: "Tapa Poderoso",
				de: "Kraftklatscher"
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
