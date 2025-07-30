import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [175],
	set: Set,

	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Touch of Happiness",
			fr: "Touche de Joie",
			es: "Toque de Felicidad",
			it: "Tocco di Felicità",
			pt: "Toque da Alegria",
			de: "Hauch der Freude"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may heal 10 damage from your Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez soigner 10 dégâts de votre Pokémon Actif.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes curar 10 puntos de daño a tu Pokémon Activo.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi curare il tuo Pokémon attivo da 10 danni.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá curar 10 pontos de dano do seu Pokémon Ativo.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 10 Schadenspunkte bei deinem Aktiven Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658617
	}
}

export default card