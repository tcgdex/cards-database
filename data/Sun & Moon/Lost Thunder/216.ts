import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Sceptile GX",
		fr: "Jungko GX",
		es: "Sceptile GX",
		it: "Sceptile GX",
		pt: "Sceptile GX",
		de: "Gewaldro GX"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 230,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mach Cut",
				fr: "Coupe Vive",
				es: "Corte Mach",
				it: "Taglio Mach",
				pt: "Corte Supersônico",
				de: "Schallschnitt"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Cyclone",
				fr: "Cyclone Feuillu",
				es: "Vendaval de Hojas",
				it: "Turbine Verde",
				pt: "Ciclone de Folhas",
				de: "Blätterwirbel"
			},
			effect: {
				en: "Move a Grass Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Grass de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía Grass de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un’Energia Grass da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 1 Energia Grass deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Grass-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 130,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Jungle Heal GX",
				fr: "Jungle Cicatrisante GX",
				es: "Curación Selva GX",
				it: "Cura Silvestre-GX",
				pt: "Cura Silvestre GX",
				de: "Dschungelheilung GX"
			},
			effect: {
				en: "Heal all damage from each of your Pokémon that has any Grass Energy attached to it. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts à chacun de vos Pokémon auquel de l’Énergie Grass est attachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a cada uno de tus Pokémon que tenga alguna Energía Grass unida a él. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura ciascuno dei tuoi Pokémon che ha Energie Grass assegnate da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano de cada um dos seus Pokémon que tiver alguma Energia Grass ligada a ele (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei jedem deiner Pokémon, an das mindestens 1 Grass-Energie angelegt ist. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365615
	}
}

export default card
