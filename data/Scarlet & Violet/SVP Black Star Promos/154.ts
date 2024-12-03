import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee",
		fr: "Wimessir",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Obliging Heal",
			fr: "Soin Serviable",
			es: "Curación Servicial",
			it: "Cure Premurose",
			pt: "Cura Prestativa",
			de: "Höfliche Heilung"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may heal 30 damage from your Active Pokémon and have it recover from a Special Condition.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez soigner 30 dégâts de votre Pokémon Actif et le guérir d'un État Spécial.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes curar 30 puntos de daño a tu Pokémon Activo y hacer que se recupere de una Condición Especial.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi curare il tuo Pokémon attivo da 30 danni e farlo guarire da una condizione speciale.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá curar 30 pontos de dano do seu Pokémon Ativo e fazer com que ele se recupere de uma Condição Especial.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 30 Schadenspunkte bei deinem Aktiven Pokémon heilen, und es erholt sich von 1 Speziellen Zustand."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card