import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		en: "Radiant Tsareena",
		fr: "Sucreine Radieux",
		es: "Tsareena Radiante",
		it: "Tsareena Lucente",
		pt: "Tsareena Radiante",
		de: "Strahlendes Fruyal"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Elegant Heal",
			fr: "Soin Élégant",
			es: "Curación Elegante",
			it: "Cura Elegante",
			pt: "Cura Elegante",
			de: "Elegante Heilung"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Aroma Shot",
			fr: "Tir Arôme",
			es: "Disparo Aromático",
			it: "Colpo Aroma",
			pt: "Disparo Aromático",
			de: "Aromaschuss"
		},

		effect: {
			en: "This Pokémon recovers from all Special Conditions.",
			fr: "Ce Pokémon guérit de tous les États Spéciaux.",
			es: "Este Pokémon se recupera de todas las Condiciones Especiales.",
			it: "Questo Pokémon guarisce da tutte le condizioni speciali.",
			pt: "Este Pokémon se recupera de todas as Condições Especiais.",
			de: "Dieses Pokémon erholt sich von allen Speziellen Zuständen."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
