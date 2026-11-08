import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Yoga Guard",
			'fr-fr': "Garde Yogique",
			'es-es': "Guardián Yoga",
			'it-it': "Difesa Yoga",
			'pt-br': "Guarda Ioga",
			'de-de': "Yogawächter"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco, sia tuo che del tuo avversario.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It eats just one berry a day. By enduring hunger, its spirit is tempered and made sharper.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682119,
				tcgplayer: 451726
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682119,
				tcgplayer: 451726
			}
		},
	],
}

export default card
