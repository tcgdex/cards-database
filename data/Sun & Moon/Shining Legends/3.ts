import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		es: "Venusaur",
		it: "Venusaur",
		pt: "Venusaur",
		de: "Bisaflor"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 160,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Jungle Totem",
				fr: "Jungle Dominante",
				es: "Dominio de la Selva",
				it: "Signore della Giungla",
				pt: "Totem da Selva",
				de: "Dschungelherrschaft"
			},
			effect: {
				en: "Each basic Grass Energy attached to your Pokémon provides GrassGrass Energy. You can’t apply more than 1 Jungle Totem Ability at a time.",
				fr: "Chaque Énergie Grass de base attachée à vos Pokémon fournit de l’Énergie GrassGrass. Vous ne pouvez pas utiliser plus d’un talent Jungle Dominante à la fois.",
				es: "Cada Energía Grass Básica unida a tus Pokémon proporciona Energía GrassGrass. No puedes aplicar más de 1 habilidad Dominio de la Selva a la vez.",
				it: "Ogni Energia base Grass assegnata ai tuoi Pokémon fornisce GrassGrass. Può essere applicata solo un’abilità Signore della Giungla alla volta.",
				pt: "Cada Energia Grass básica ligada aos seus Pokémon fornece Energias GrassGrass. Você não pode usar mais de 1 Habilidade Totem da Selva por vez.",
				de: "Jede an deine Pokémon angelegte Grass-Basis-Energie liefert GrassGrass-Energie. Du kannst immer nur jeweils 1 Fähigkeit Dschungelherrschaft einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 302141,
		tcgplayer: 146655
	}
}

export default card
