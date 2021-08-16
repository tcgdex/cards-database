import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Vaporeon GX",
		fr: "Aquali GX",
		es: "Vaporeon GX",
		it: "Vaporeon GX",
		pt: "Vaporeon GX",
		de: "Aquana GX"
	},
	illustrator: "PLANETA Otani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 210,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hydrating Drops",
				fr: "Gouttes Hydratantes",
				es: "Gotas Hidratantes",
				it: "Gocce Idratanti",
				pt: "Gotas Hidratantes",
				de: "Wasserspender"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from your Active Water Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à votre Pokémon Actif Water.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a tu Pokémon Water Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare il tuo Pokémon attivo Water da 30 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano do seu Pokémon Water Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei deinem Aktiven Water-Pokémon heilen."
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
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cure Shower GX",
				fr: "Pluie Curative GX",
				es: "Ducha Curativa GX",
				it: "Pioggia Curativa GX",
				pt: "Chuva de Cura GX",
				de: "Heilender Schauer GX"
			},
			effect: {
				en: "Heal all damage from all of your Water Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon Water. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a todos tus Pokémon Water. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura tutti i tuoi Pokémon Water da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano de todos os seus Pokémon Water (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei jedem deiner Water-Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
