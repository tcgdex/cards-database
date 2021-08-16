import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Espeon & Deoxys GX",
		fr: "Mentali et Deoxys GX",
		es: "Espeon y Deoxys GX",
		it: "Espeon e Deoxys GX",
		pt: "Espeon e Deoxys GX",
		de: "Psiana & Deoxys GX"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 260,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Club",
				fr: "Club Psy",
				es: "Club Psíquico",
				it: "Club delle Menti",
				pt: "Clube Psíquico",
				de: "Psycho-Club"
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Psychic Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon Psychic de Banc.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon Psychic en Banca.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon Psychic nella tua panchina.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon Psychic no seu Banco.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Psychic-Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Division GX",
				fr: "Division Croisée GX",
				es: "División Cruzada GX",
				it: "Distribuzione Incrociata GX",
				pt: "Divisão Cruzada GX",
				de: "Kreuzdivision GX"
			},
			effect: {
				en: "Put 10 damage counters on your opponent’s Pokémon in any way you like. If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack’s cost), put 20 damage counters on them instead. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 20 marqueurs de dégâts à la place. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 10 contadores de daño en los Pokémon de tu rival de la manera que desees. Si este Pokémon tiene por lo menos 3 Energías adicionales unidas a él (además de las del coste de este ataque), pon 20 contadores de daño en ellos en vez de 10. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Distribuisci a piacimento 10 segnalini danno sui Pokémon del tuo avversario. Se questo Pokémon ha almeno tre Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, invece distribuiscine 20. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 10 contadores de dano nos Pokémon do seu oponente como desejar. Se este Pokémon tiver pelo menos 3 Energias adicionais ligadas a ele (além do custo deste ataque), coloque 20 contadores de dano neles ao invés de 10 (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 10 Schadensmarken beliebig auf die Pokémon deines Gegners. Wenn an dieses Pokémon mindestens 3 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege stattdessen 20 Schadensmarken auf die Pokémon deines Gegners. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			}

		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
