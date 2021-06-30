import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Perplexing Forest",
				fr: "Forêt Déroutante",
				es: "Bosque Desconcertante",
				it: "Foresta Sconcertante",
				pt: "Floresta Estarrecedora",
				de: "Verblüffender Wald"
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
				pt: "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Impact",
				fr: "Impact Lugubre",
				es: "Impacto Sombra",
				it: "Impatto Ombra",
				pt: "Impacto Sombrio",
				de: "Schatteneinschlag"
			},
			effect: {
				en: "Put 4 damage counters on 1 of your Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
				es: "Pon 4 contadores de daño en 1 de tus Pokémon.",
				it: "Metti quattro segnalini danno su uno dei tuoi Pokémon.",
				pt: "Coloque 4 contadores de dano em 1 dos seus Pokémon.",
				de: "Lege 4 Schadensmarken auf 1 deiner Pokémon."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
