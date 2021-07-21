import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Dragonite-GX",
		fr: "Dracolosse-GX",
		es: "Dragonite-GX",
		it: "Dragonite-GX",
		pt: "Dragonite-GX",
		de: "Dragoran-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 250,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 70,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Giga Impacto",
				it: "Gigaimpatto",
				pt: "Gigaimpacto",
				de: "Gigastoß"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 200,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragonporter GX",
				fr: "Dracoporteur-GX",
				es: "Portadragones-GX",
				it: "Dragotrasporto-GX",
				pt: "Dragoportal-GX",
				de: "Drachenträger-GX"
			},
			effect: {
				en: "Put 3 Dragon Pokémon from your discard pile onto your Bench. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez 3 Pokémon Dragon de votre pile de défausse sur votre Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 3 Pokémon Dragon de tu pila de descartes en tu Banca. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi tre Pokémon Dragon dalla tua pila degli scarti e mettili nella tua panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 3 Pokémon Dragon da sua pilha de descarte no seu Banco (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 3 Dragon-Pokémon aus deinem Ablagestapel auf deine Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
