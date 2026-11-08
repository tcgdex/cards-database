import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1016],
	set: Set,

	name: {
		'en-us': "Fezandipiti",
		'fr-fr': "Favianos",
		'es-es': "Fezandipiti",
		'it-it': "Fezandipiti",
		'pt-br': "Fezandipiti",
		'de-de': "Beatori"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Adrena-Pheromone",
			'fr-fr': "Adréna-Phéromone",
			'es-es': "Adrenalina Feromona",
			'it-it': "Adrena-Feromone",
			'pt-br': "Adrena-feromônio",
			'de-de': "Adrena-Pheromon"
		},

		effect: {
			'en-us': "If this Pokémon has any {D} Energy attached and is damaged by an attack, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si ce Pokémon a au moins une Énergie {D} attachée et qu'il subit les dégâts d'une attaque, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si este Pokémon tiene alguna Energía {D} unida y resulta dañado por un ataque, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'it-it': "Se questo Pokémon ha delle Energie {D} assegnate e viene danneggiato da un attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se este Pokémon tiver alguma Energia {D} ligada a ele e for danificado por um ataque, jogue uma moeda. Se sair cara, previna aquele dano.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist und es durch eine Attacke Schaden erhält, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Energy Feather",
			'fr-fr': "Plume Énergétique",
			'es-es': "Pluma Energía",
			'it-it': "Piuma Energetica",
			'pt-br': "Pluma de Energia",
			'de-de': "Energiefeder"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Fezandipiti beats its glossy wings to scatter pheromones that captivate people and Pokémon.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769270,
				tcgplayer: 550140
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769270,
				tcgplayer: 550140
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 776164,
			}
		},
	],

	illustrator: "Kouki Saitou",

}

export default card
