import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lugia-GX",
		fr: "Lugia-GX",
		es: "Lugia-GX",
		it: "Lugia-GX",
		pt: "Lugia-GX",
		de: "Lugia-GX"
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 190,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "This attack does 30 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pelagic Blade",
				fr: "Lame Pélagique",
				es: "Tajo Pelágico",
				it: "Lame Pelagiche",
				pt: "Lâmina Pelágica",
				de: "Pelagialklinge"
			},
			effect: {
				en: "This Pokémon can’t use Pelagic Blade during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Pélagique pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Tajo Pelágico durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lame Pelagiche.",
				pt: "Este Pokémon não poderá usar Lâmina Pelágica durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Pelagialklinge während deines nächsten Zuges nicht einsetzen."
			},
			damage: 170,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost Purge GX",
				fr: "Purge Perdue GX",
				es: "Purga Perdida GX",
				it: "Esilio Perduto-GX",
				pt: "Expurgação Perdida GX",
				de: "Nirgendwo-Sturz GX"
			},
			effect: {
				en: "Put your opponent’s Active Pokémon and all cards attached to it in the Lost Zone. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la Zone Perdue. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la Zona Perdida. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e mettili nell’area perduta. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na Zona Perdida (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege das Aktive Pokémon deines Gegners und alle an es angelegten Karten ins Nirgendwo. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
