import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Appletun",
		'fr-fr': "Dratatin",
		'es-es': "Appletun",
		'it-it': "Appletun",
		'pt-br': "Appletun",
		'de-de': "Schlapfel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			'en-us': "Thick Mucus",
			'fr-fr': "Mucus Épais",
			'es-es': "Mucosidad Espesa",
			'it-it': "Mucosa Densa",
			'pt-br': "Thick Mucus",
			'de-de': "Zäher Schleim"
		},

		effect: {
			'en-us': "This attack does 70 damage for each Special Energy card attached to your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque carte Énergie spéciale attachée aux Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 70 puntos de daño por cada carta de Energía Especial unida a los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 70 danni per ogni carta Energia speciale assegnata ai Pokémon del tuo avversario.",
			'pt-br': "This attack does 70 damage for each Special Energy card attached to your opponent's Pokémon.",
			'de-de': "Diese Attacke fügt für jede an den Pokémon deines Gegners angelegte Spezial-Energiekarte 70 Schadenspunkte zu."
		},

		damage: "70×",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Fighting Tackle",
			'fr-fr': "Charge Combative",
			'es-es': "Placaje Lucha",
			'it-it': "Azione da Combattente",
			'pt-br': "Fighting Tackle",
			'de-de': "Kampf-Tackle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 80 danni in più.",
			'pt-br': "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	dexId: [842],

	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	description: {
		'en-us': "Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574169,
				tcgplayer: 246921
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574169,
				tcgplayer: 246921
			}
		},
	],
}

export default card
