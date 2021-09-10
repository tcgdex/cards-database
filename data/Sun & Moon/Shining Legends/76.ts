import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Mewtwo GX",
		fr: "Mewtwo GX",
		es: "Mewtwo GX",
		it: "Mewtwo GX",
		pt: "Mewtwo GX",
		de: "Mewtu GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 190,
	types: [
		"Psychic",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Full Burst",
				fr: "Pleine Puissance",
				es: "Explosión Total",
				it: "Esplosione Totale",
				pt: "Explosão Total",
				de: "Vollkraft"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano vezes a quantidade de Energia ligada a este Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Absorption",
				fr: "Super Absorption",
				es: "Superabsorción",
				it: "Superassimilazione",
				pt: "Superabsorção",
				de: "Super-Absorber"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psystrike GX",
				fr: "Frappe Psy GX",
				es: "Onda Mental GX",
				it: "Psicobotta-GX",
				pt: "Golpe Psíquico GX",
				de: "Psychostoß GX"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "O dano deste ataque não é afetado quaisquer efeitos no Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
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
