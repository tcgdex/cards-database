import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
		es: "Glalie",
		it: "Glalie",
		pt: "Glalie",
		de: "Firnontor"
	},
	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Fang",
				fr: "Crocs Givre",
				es: "Colmillo Hielo",
				it: "Gelodenti",
				pt: "Presa de Gelo",
				de: "Eiszahn"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un’Energia assegnata a quel Pokémon.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado, e descarte 1 Energia daquele Pokémon.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und du legst 1 Energie von jenem Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frosty Typhoon",
				fr: "Typhon Givré",
				es: "Tifón Gélido",
				it: "Gelotifone",
				pt: "Tufão Glacial",
				de: "Frosttaifun"
			},
			effect: {
				en: "This Pokémon can’t use Frosty Typhoon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Typhon Givré pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Tifón Gélido durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gelotifone.",
				pt: "Este Pokémon não poderá usar Tufão Glacial durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Frosttaifun während deines nächsten Zuges nicht einsetzen."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
