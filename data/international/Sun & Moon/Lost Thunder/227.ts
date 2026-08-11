import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Lugia GX",
		'fr-fr': "Lugia GX",
		'es-es': "Lugia GX",
		'it-it': "Lugia GX",
		'pt-br': "Lugia GX",
		'de-de': "Lugia GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Secret Rare",
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
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
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
				'en-us': "Pelagic Blade",
				'fr-fr': "Lame Pélagique",
				'es-es': "Tajo Pelágico",
				'it-it': "Lame Pelagiche",
				'pt-br': "Lâmina Pelágica",
				'de-de': "Pelagialklinge"
			},
			effect: {
				'en-us': "This Pokémon can’t use Pelagic Blade during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Lame Pélagique pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Tajo Pelágico durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lame Pelagiche.",
				'pt-br': "Este Pokémon não poderá usar Lâmina Pelágica durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Pelagialklinge während deines nächsten Zuges nicht einsetzen."
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
				'en-us': "Lost Purge GX",
				'fr-fr': "Purge Perdue GX",
				'es-es': "Purga Perdida GX",
				'it-it': "Esilio Perduto-GX",
				'pt-br': "Expurgação Perdida GX",
				'de-de': "Nirgendwo-Sturz GX"
			},
			effect: {
				'en-us': "Put your opponent’s Active Pokémon and all cards attached to it in the Lost Zone. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la Zone Perdue. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la Zona Perdida. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e mettili nell’area perduta. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na Zona Perdida (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege das Aktive Pokémon deines Gegners und alle an es angelegten Karten ins Nirgendwo. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 365860,
		tcgplayer: 178982
	}
}

export default card
