import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [175],
	set: Set,

	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Touch of Happiness",
			'fr-fr': "Touche de Joie",
			'es-es': "Toque de Felicidad",
			'it-it': "Tocco di Felicità",
			'pt-br': "Toque da Alegria",
			'de-de': "Hauch der Freude"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may heal 10 damage from your Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez soigner 10 dégâts de votre Pokémon Actif.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes curar 10 puntos de daño a tu Pokémon Activo.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi curare il tuo Pokémon attivo da 10 danni.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá curar 10 pontos de dano do seu Pokémon Ativo.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 10 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This ovate creature is frequently mistaken for a moving egg when encountered out in the fields or in the mountains. Its guileless smile soothes the soul.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658617,
				tcgplayer: 272256
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658617,
				tcgplayer: 272256
			}
		},
	],
}

export default card
