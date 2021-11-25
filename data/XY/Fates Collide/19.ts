import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Omastar BREAK",
		fr: "Amonistar TURBO",
		es: "Omastar TURBO",
		it: "Omastar TURBO",
		pt: "Omastar TURBO",
		de: "Amoroso-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omastar",
		fr: "Amonistar",
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dangerous Tentacle",
				fr: "Tentacule Dangereux",
				es: "Tentáculo Peligroso",
				it: "Tentacoli Pericolosi",
				pt: "Tentáculo Perigoso",
				de: "Gefährliche Tentakel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon-EX with his or her Active Pokémon.",
				fr: "Une seule fois pendant votre tour(avant votre attaque), vous pouvez échanger l'un des Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar 1 de los Pokémon-EX en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare uno dei Pokémon-EX nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode trocar 1 dos Pokémon-EX no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-EX auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners austauschen."
			},
		},
	],

	retreat: 0
}

export default card
