import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon ex",
		'fr-fr': "Phyllali-ex",
		'es-es': "Leafeon ex",
		'pt-br': "Leafeon ex",
		'it-it': "Leafeon-ex",
		'de-de': "Folipurba-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Verdant Storm",
			'fr-fr': "Tempête Verdoyante",
			'es-es': "Tormenta Verdosa",
			'pt-br': "Tempestade Verdejante",
			'it-it': "Tempesta Rigogliosa",
			'de-de': "Begrünungssturm"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Fire", "Water"],

		name: {
			'en-us': "Moss Agate",
			'fr-fr': "Agate Moussue",
			'es-es': "Musgo Ágata",
			'pt-br': "Ágata Musgo",
			'it-it': "Agata Muschiata",
			'de-de': "Moosachat"
		},

		effect: {
			'en-us': "Heal 100 damage from each of your Benched Pokémon.",
			'fr-fr': "Soignez 100 dégâts de chacun de vos Pokémon de Banc.",
			'es-es': "Cura 100 puntos de daño a cada uno de tus Pokémon en Banca.",
			'pt-br': "Cure 100 pontos de dano de cada um dos seus Pokémon no Banco.",
			'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da 100 danni.",
			'de-de': "Heile 100 Schadenspunkte bei jedem Pokémon auf deiner Bank."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "Jiro Sasumo",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805538,
				tcgplayer: 610499
			}
		},
	],
}

export default card
