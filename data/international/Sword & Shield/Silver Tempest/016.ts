import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		'en-us': "Radiant Tsareena",
		'fr-fr': "Sucreine Radieux",
		'es-es': "Tsareena Radiante",
		'it-it': "Tsareena Lucente",
		'pt-br': "Tsareena Radiante",
		'de-de': "Strahlendes Fruyal"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Elegant Heal",
			'fr-fr': "Soin Élégant",
			'es-es': "Curación Elegante",
			'it-it': "Cura Elegante",
			'pt-br': "Cura Elegante",
			'de-de': "Elegante Heilung"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from each of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Aroma Shot",
			'fr-fr': "Tir Arôme",
			'es-es': "Disparo Aromático",
			'it-it': "Colpo Aroma",
			'pt-br': "Disparo Aromático",
			'de-de': "Aromaschuss"
		},

		effect: {
			'en-us': "This Pokémon recovers from all Special Conditions.",
			'fr-fr': "Ce Pokémon guérit de tous les États Spéciaux.",
			'es-es': "Este Pokémon se recupera de todas las Condiciones Especiales.",
			'it-it': "Questo Pokémon guarisce da tutte le condizioni speciali.",
			'pt-br': "Este Pokémon se recupera de todas as Condições Especiais.",
			'de-de': "Dieses Pokémon erholt sich von allen Speziellen Zuständen."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This feared Pokémon has long, slender legs and a cruel heart. It shows no mercy as it stomps on its opponents.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682057,
				tcgplayer: 451645
			}
		},
	],
}

export default card
