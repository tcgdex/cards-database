import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [841],
	set: Set,

	name: {
		'en-us': "Flapple",
		'fr-fr': "Pomdrapi",
		'es-es': "Flapple",
		'it-it': "Flapple",
		'pt-br': "Flapple",
		'de-de': "Drapfel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Acidic Spit",
			'fr-fr': "Crache-Acide",
			'es-es': "Salivazo Ácido",
			'it-it': "Acidosputo",
			'pt-br': "Cusparada Ácida",
			'de-de': "Säuresabber"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Grass", "Fire"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794512,
				tcgplayer: 589946
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794512,
				tcgplayer: 589946
			}
		},
	],

	illustrator: "GOTO minori",

}

export default card
